import Preparation from "../components/Preparation"
import BackToTopButton from "../components/BackToTopButton"
import ResortInfo from "../components/ResortInfo"
import WeatherInfo from "../components/WeatherInfo"
import CoachTips from "../components/CoachTips"
import ChapterLinks from "../components/ChapterLinks"


import "../components/ChunkGeneral.css"
import { useState } from "react"

const area_list = ["湯澤", "白馬"]
const sport_type_list = ["snowboard", "ski"]


function MainPage({ currentLanguage, setLanguage, languageList }) {
    const [selectedArea, changeArea] = useState(area_list[0])
    const [selectedSport, changeSport] = useState(sport_type_list[0])
    return (
        <>
            <header id="header_card">
                <h4 id="web_name">
                    Haru's handbook
                </h4>
            </header>

            {/* 此區段是切換父級語言變數的按鈕渲染 
            {languageList.map((lang) => (
                <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                >
                    {lang}
                </button>))}
            */}
            <ChapterLinks />
            <Preparation
                sport={selectedSport}
                sport_type_list={sport_type_list}
                changeSport={changeSport}
                currentLanguage={currentLanguage}
            />
            <ResortInfo
                area={selectedArea}
                area_list={area_list}
                changeArea={changeArea} />
            <WeatherInfo
                area={selectedArea}
                area_list={area_list} />
            <CoachTips />
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