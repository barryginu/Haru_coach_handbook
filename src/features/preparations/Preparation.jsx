import { useState } from 'react'
import "./Preparation.css"
import { itemList } from "../../data/items.js"
import { itemTexts } from '../../data/itemTexts.js'

const declare = "*本清單內容僅供新手參考，滑雪是看天吃飯的運動，裝備內容隨著你的熟練、地區、天氣、溫度等都會有差異，可以隨你自己的理解與經驗調整喔"

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
    const [checkedItems, setCheckedItems] = useState([])
    const current_sport_item = itemList.filter((item) => item.sport_type == "both" || item.sport_type == sport)

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
        checkedItems.length = 0
    }

    function handleCheck(item) {
        if (checkedItems.includes(item)) {
            setCheckedItems(
                checkedItems.filter((checkedItem) => checkedItem !== item)
            )
        } else {
            setCheckedItems([...checkedItems, item])
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
                        {checkedItems.length} / {current_sport_item.length} 準備完成
                    </p>
                    <div id='preparation_list_progression_bar_track'>
                        <div id='preparation_list_progression_bar_value'
                            style=
                            {{
                                "--bar_value": (checkedItems.length / current_sport_item.length) * 100 + "%"
                            }}>
                        </div>
                    </div>
                </div>

                {/* 清單本身 */}
                <ul>
                    {current_sport_item.map((item) => (
                        <li key={item.id}>
                            <label>
                                {/*label是為了讓字也可以點*/}
                                <input
                                    type="checkbox"
                                    checked={checkedItems.includes(item)}
                                    onChange={() => handleCheck(item)}
                                />
                                {itemTexts[item.id][currentLanguage].name}
                            </label>
                        </li>
                    ))}
                </ul>


            </div >
        </>
    )
}

export default Preparation