import ItemList from "../components/ItemList"
import BackToTopButton from "../components/BackToTopButton"
import ResortInfo from "../components/ResortInfo"
import WeatherInfo from "../components/WeatherInfo"

import { useState } from "react"

const area_list = ["湯澤", "白馬"]


function MainPage({ language, setLanguage, languageList }) {
    const [selectedArea, changeArea] = useState(area_list[0])
    return (
        <>
            <h1>教練小手冊</h1>
            {/* 此區段是切換父級語言變數的按鈕渲染 
            {languageList.map((lang) => (
                <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                >
                    {lang}
                </button>))}
            */}
            <ItemList />
            <ResortInfo
                area={selectedArea}
                area_list={area_list}
                changeArea={changeArea} />
            <WeatherInfo />
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