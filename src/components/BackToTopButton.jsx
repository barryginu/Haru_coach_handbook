import './BackToTopButton.css'
import BTTIcon from './BTTIcon'


function BackToTopButton() {
    return (

        <button className='BTT_button_itself'
            onClick={ScrollToTop}>
            <BTTIcon />
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