import "./WeatherInfo.css"
import { resorts } from "../../data/resorts.js";



function WeatherInfo({ area, area_list }) {
    // 如果要隨區域自動篩選用這邊(這個const)，然後上面的area_list就可以不用傳進來
    const currentAreaResort = resorts.filter(
        (resort) => resort.area === area
    )

    // 這版是依照區域分選項用的
    function testArea(resort, areaGroup) {
        if (resort.area === areaGroup) {
            return <option value={resort.name}> {resort.name}
            </option>
        }

    }


    return (
        <>
            <div id="weather_info_chunk" className="chapter_chunk">
                <h2> 天氣資訊 </h2>
                <select value="" name="chooseResort">
                    {/* 這版是依照區域分選項組，全部選項開放 */}
                    {/* {
                        area_list.map((areaName) => (<optgroup label={areaName}>
                            {resorts.map((resort) => testArea(resort, areaName,))}
                        </optgroup>))
                    } */}

                    {/* 這邊是只篩選當前區域的雪場*/}
                    {currentAreaResort.map((resort) => (
                        <option value={resort.name}> {resort.name}
                        </option>))}


                </select>

            </div >
        </>
    )

}

export default WeatherInfo
// weather_info_chunk