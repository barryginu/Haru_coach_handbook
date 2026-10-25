import "./ChapterLinks.css"

const chapters = [
    { id: "equipt_list", label: "1 裝備" },
    { id: "resort_info_Chunk", label: "2 雪場" },
    { id: "weather_info_chunk", label: "3 天氣" },
    { id: "coach_tips_chunk", label: "4 提醒" }
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
                    {chapter.label}
                </button>
            ))}
        </div>
    )
}

export default ChapterLinks