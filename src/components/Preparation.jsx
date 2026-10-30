import { useState } from 'react'
import "./Preparation.css"
import { itemList } from "../data/items.js"
import { itemTexts } from '../data/itemTexts.js'

const declare = "*本清單內容僅供新手參考，滑雪是看天吃飯的運動，裝備內容隨著你的熟練、地區、天氣、溫度等都會有差異，可以隨你自己的理解與經驗調整喔"

{/*
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
*/}


{/*
    此處可還原成function Preparation(props)
    同時下面return呼叫用{props.areaName}
*/}
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
            此區段是切換父級，裝備類型變數的按鈕渲染
            {sport_type_list.map((sportOption) => (
                <button
                    key={sportOption}
                    onClick={() => changeSport(sportOption)}>
                    {show_sport_type(sportOption)}
                </button>))
            }

            <div id="equipt_list" className="chapter_chunk">
                <h2>裝備清單 當前裝備:{show_sport_type(sport)}</h2>
                <h6>{declare}</h6>
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

                <p>
                    已完成 {checkedItems.length} / {current_sport_item.length} 項
                </p>
            </div>
        </>
    )
}

export default Preparation