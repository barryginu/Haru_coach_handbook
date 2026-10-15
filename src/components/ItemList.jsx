import { useState } from 'react'

const items = ["雪衣", "雪褲", "手套", "護具", "雪襪"]



function ItemList() {
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
            <h1>教練小手冊</h1>
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