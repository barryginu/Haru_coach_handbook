import { useState } from 'react'
import "./ItemList.css"

const items = ["雪衣", "雪褲", "手套", "護具", "雪襪"]

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
    此處可還原成function ItemList(props)
    同時下面return呼叫用{props.areaName}
*/}
function ItemList({ areaName }) {
    const [checkedItems, setCheckedItems] = useState([])
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


            <div className="equipt_list">
                <h2>裝備清單</h2>
                <ul>
                    {items.map((item) => (
                        <li key={item}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={checkedItems.includes(item)}
                                    onChange={() => handleCheck(item)}
                                />
                                {item}
                            </label>
                        </li>
                    ))}
                </ul>

                <p>
                    已完成 {checkedItems.length} / {items.length} 項
                </p>
            </div>
        </>
    )
}

export default ItemList