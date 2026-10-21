import './ResortInfo.css'
// 這邊需要具名匯入，名詞須跟匯出端一樣
// 這是用來存雪場資料的，移動到外部檔案讓其他元件也能取用
import { resorts } from '../data/resorts.js'


function ResortInfo({ area, area_list, changeArea }) {
    const currentAreaResort = resorts.filter(
        (resort) => resort.area === area
    )

    return (
        <>
            {/* 此區段是切換父級，區域變數的按鈕渲染
            {area_list.map((areaOption) => (
                <button
                    key={areaOption}
                    onClick={() => changeArea(areaOption)}>
                    {areaOption}
                </button>))
            } */}

            <div className='resort_mainChunk'>
                <h2> 雪場資訊 </h2>
                <h2>目前地區: {area}</h2>
                {currentAreaResort.map((resort) => (<div key={resort.name} className="resort_card">
                    {resort.name}
                    <br />
                    {resort.latitude}
                    <br />
                    {resort.longitude}
                </div>))}

            </div>

        </>
    )
}

export default ResortInfo

