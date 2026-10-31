import "./ChapterLinks.css"

const chapters = [
    { id: "preparation_list", num: "1.", title: "行前準備", brief: "裝備、雪票，滑雪前的一切" },
    { id: "resort_info_Chunk", num: "2.", title: "雪場資訊", brief: "各地區的雪場介紹" },
    { id: "weather_info_chunk", num: "3.", title: "天氣資訊", brief: "各雪場的天氣預報" },
    { id: "coach_tips_chunk", num: "4.", title: "教練提醒", brief: "來自教練的小提醒" }
]

function scrollToChapter(targetId) {
    const target = document.getElementById(targetId)

    // 這裡是要確認target存在
    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
}

function ChapterLinks() {
    return (
        <div id="chapter_links_chunk" className="chapter_chunk">
            {chapters.map((chapter) => (
                <button
                    key={chapter.id}
                    type="button"
                    className="chapter_block"
                    onClick={() => scrollToChapter(chapter.id)}
                >
                    <code>{chapter.num}</code>
                    <strong>{chapter.title}</strong>
                    <small>{chapter.brief}</small>
                </button>
            ))}
        </div>
    )
}

export default ChapterLinks