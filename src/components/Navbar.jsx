import './Navbar.css'

function Navbar() {
    return (
        <header id="header_card">
            <nav>
                <button id="menu_button">
                    {/* 11/02 待替換成svg */}
                    ☰
                </button>
            </nav>
            <h4 id="web_name">
                {/* 11/02 使用a標籤製作回到首頁功能 */}
                Haru's handbook
            </h4>
            <button id="theme_button">
                {/* 11/02 待替換成svg */}
                ☀
            </button>


        </header >
    )
}

export default Navbar