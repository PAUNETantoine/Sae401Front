import "../styles/composants/Footer.css";
import Bouton from "./Bouton";

function Footer() {
    return (
        <div className="footer">
            <p>BDE Informatique - Le Havre</p>

            <div className="footer-images">
                <Bouton
                    image={"/ressources/images/logo_insta.png"}
                    className={"footer-btn-image"}
                    onClick={() => window.open("https://www.instagram.com/bdeinfo_lh/", "_blank")}
                    imageWidth={30}
                    imageHeight={30}
                />
                <Bouton
                    image={"/ressources/images/logo_discord.png"}
                    className={"footer-btn-image"}
                    onClick={() => window.open("https://discord.gg/9akNvQ5a", "_blank")}
                    imageWidth={30}
                    imageHeight={30}
                />
            </div>
        </div>
    );
}

export default Footer;
