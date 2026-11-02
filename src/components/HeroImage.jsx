import "./HeroImage.css"
import heroImage from "../assets/duo_tone_ref_full.jpg"

function HeroImage() {


    return (
        <div id="hero_image_chunk">
            <img id="hero_image" src={heroImage}>
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