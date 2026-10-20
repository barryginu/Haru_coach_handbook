import './ResortInfo.css'

class Resort {
    constructor(name, area, link, icon, photo) {
        this.name = name;
        this.area = area;
        this.link = link;
        this.icon = icon;
        this.photo = photo
    }
}
const resorts = [
    new Resort("岩原", "湯澤", "", "", ""),
    new Resort("神樂", "湯澤", "", "", ""),
    new Resort("八方尾根", "白馬", "", ""),
    new Resort("Sanosaka", "白馬", "", "")

]


function ResortInfo({ area, area_list, changeArea }) {
    const currentAreaResort = resorts.filter(
        (resort) => resort.area === area
    )
    return (
        <>
            {/*  此區段是切換父級，區域變數的按鈕渲染 
            {area_list.map((areaOption) => (
                <button
                    key={areaOption}
                    onClick={() => changeArea(area)}>
                    {areaOption}
                </button>))
            } 
            */}
            <div className='resort_mainChunk'>
                <h2> 雪場資訊 </h2>
                <h2>目前地區: {area}</h2>
                {currentAreaResort.map((resort) => (<div key={resort.name} className="resort_card">
                    {resort.name}
                </div>))}

            </div>

        </>
    )
}

export default ResortInfo

