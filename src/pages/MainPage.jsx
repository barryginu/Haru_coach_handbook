import ItemList from "../components/ItemList"
import BackToTopButton from "../components/BackToTopButton"
import { useState } from "react"
const area_list = ["湯澤", "白馬"]


function MainPage() {
    const [area, changeArea] = useState(area_list[0])
    return (
        <>
            <ItemList />
            <BackToTopButton />
            <div className="for_test">
                測 <br />
                試 <br />
                文 <br />
                字 <br />
                測 <br />
                試 <br />
                文 <br />
                字 <br />
                測 <br />
                試 <br />
                文 <br />
                字 <br />
                測 <br />
                試 <br />
                文 <br />
                字 <br />
                測 <br />
                試 <br />
                文 <br />
                字 <br />
                測 <br />
                試 <br />
                文 <br />
                字 <br />
                測 <br />
                試 <br />
                文 <br />
                字 <br />
                測 <br />
                試 <br />
                文 <br />
                字 <br />
            </div>
        </>
    )
}

export default MainPage