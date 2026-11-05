import { useState } from 'react'
import "./Preparation.css"
import { itemList } from "../../data/items.js"
import { itemTexts } from '../../data/itemTexts.js'

const declare = "*本清單內容僅供新手參考，滑雪是看天吃飯的運動，裝備內容隨著你的熟練、地區、天氣、溫度等都會有差異，可以隨你自己的理解與經驗調整喔"

const rentBuyLabel = {
    rent: "建議租借",
    buy: "建議購買",
    either: "租買皆可",
}
/*
    // useState範例
    const [count, setCount] = useState(5);
    // 這是陣列的解構賦值等下如下
    const result = useState(5)
    const count = result[0]  #同時因為初始值給5 所以現在等於5
    const setCount = result[1]
    //
    意思是
    用useState()方法建立一個陣列，裡面有兩個物件，一個是 count，他本身是一個變數，可以是數字文字陣列等
    另一個物件是setCount，他本身是一個函式，用來更新count這個變數的內容，並讓網頁同步刷新
    我用useState()這方法時，同時括號中可同時設定這個變數的初始值
*/


/*
    此處可還原成function Preparation(props)
    同時下面return呼叫用{props.areaName}
*/
function Preparation({
    sport,              // 當前的運動類型
    sport_type_list,    // 存運動類型的list
    changeSport,        // 改變運動類型的func，可以讓網頁刷新
    currentLanguage     // 當前的頁面語言
}) {
    // 存的內容從物件改為id，字串永遠可靠
    const [checkedIds, setCheckedIds] = useState([])
    // 拉出目前運動的裝備清單存
    const current_sport_item = itemList.filter((item) => item.sport_type == "both" || item.sport_type == sport)
    // 從當前動清單中拉出有多少個已經被勾起來
    const checkedCount = current_sport_item.filter((item) => checkedIds.includes(item.id)
    ).length


    // 用來給切換運動顯示中文的，之後可以抽出來
    function show_sport_type(current_sport) {
        if (current_sport == "snowboard") {
            return "單板"
        }
        else if (current_sport == "ski") {
            return "雙板"
        }
    }

    function change_sport_plus_reset_checkList(sportOption) {
        changeSport(sportOption)
        setCheckedIds([])          // 傳入一個全新的空陣列
    }


    function handleCheck(id) {
        if (checkedIds.includes(id)) {
            // 這邊是如果這ID有在"勾選了的清單內"的話。
            // 用 setCheckedIds()這個涵式改變checkedIds這個list，並重新渲染
            setCheckedIds(
                // 這涵式需要傳入一個list(因為對應的是)list 所以用filter生一個list
                checkedIds.filter((checkedId) => checkedId !== id)
            )

        } else {
            // ...list是展開的意思，意思是展開這陣列(並讓你可以在前後做事)
            // 這邊是展開已有的，並加入剛剛勾選的
            setCheckedIds([...checkedIds, id])
        }
    }

    return (
        <>


            <div id="preparation_list" className="chapter_chunk">

                {/* 標題與切換運動 */}
                <div id='preparation_list_title_chunk'>
                    <h2 id='preparation_list_title'>
                        事前準備
                    </h2>
                    <div id='sport_toggle_group' data-selected={sport}>
                        {sport_type_list.map((sportOption) => (
                            <button
                                key={sportOption}
                                // 比對當前運動，是當前的會多一個active的class，不是的話class會是空字串(舊版使用)
                                // className={sportOption === sport ? "active" : ""}
                                // onClick={() => changeSport(sportOption)}>
                                onClick={() => change_sport_plus_reset_checkList(sportOption)}>
                                {show_sport_type(sportOption)}
                            </button>))
                        }
                    </div>
                </div>

                {/* 文字介紹類 */}
                <div id='preparation_list_intro'>
                    <p>
                        第一次去滑雪要準備什麼？<br />
                        下面列出了滑雪所需的裝備，從必備到選備。<br />
                        可以直接當作打包清單使用，還配有我的個人建議喔！
                    </p>
                </div>
                <div id='preparation_list_declare'>
                    <p>{declare}</p>
                </div>

                {/* 進度條 */}
                <div id='preparation_list_progression_bar_chunk'>
                    <p>
                        {checkedCount} / {current_sport_item.length} 準備完成
                    </p>
                    <div id='preparation_list_progression_bar_track'>
                        <div id='preparation_list_progression_bar_value'
                            style=
                            {{
                                "--bar_value": (checkedCount / current_sport_item.length) * 100 + "%"
                            }}>
                        </div>
                    </div>
                </div>

                {/* 清單本身 */}
                <ul>
                    {current_sport_item.map((item) => (
                        <li key={item.id}>
                            {/* (head) 放名稱與右標籤 */}
                            <div className="item_head">
                                <label>
                                    {/*label是為了讓字也可以點*/}
                                    <input
                                        type="checkbox"
                                        checked={checkedIds.includes(item.id)}
                                        onChange={() => handleCheck(item.id)}
                                    />
                                    {itemTexts[item.id][currentLanguage].name}
                                </label>
                                <span className="item_tag" data-selected={item.rent_or_buy}>{rentBuyLabel[item.rent_or_buy]}</span>
                            </div>
                            {/* (body) 放量表與建議 */}
                            <div className="item_body">
                                <p> Haru的建議：<br />
                                    {itemTexts[item.id][currentLanguage].suggestion}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>


            </div >
        </>
    )
}

export default Preparation