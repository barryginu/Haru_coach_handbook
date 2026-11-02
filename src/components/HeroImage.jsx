import "./HeroImage.css"
import heroImage_1 from "../assets/duo_tone_ref_full.jpg"
import heroImage_2 from "../assets/desktop_welcomPage_photo_1.jpg"

function HeroImage() {


    return (
        <div id="hero_image_chunk">
            <img id="hero_image" src={heroImage_2}>
            </img>
            <div id="title_block">
                <h1 id="title">Haru's <br />
                    snow sport<br />
                    handbook
                </h1>

            </div>
        </div>

    )

}

export default HeroImage