import './BackToTopButton.css'

function BackToTopButton() {
    return (

        <button className='BTT_button_itself'
            onClick={ScrollToTop}>
            測試
            <br />
            按鈕
        </button >

    )
}

function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

export default BackToTopButton