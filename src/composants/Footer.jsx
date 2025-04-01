import "../styles/composants/Footer.css";
import Bouton from "./Bouton";

function Header()
{

    const handleImageClick = () => {
        alert("Image cliquée !");
    };

    return (
        <div className="footer">
            <p>BDE Informatique - Le Havre</p>

            <div className="footer-images">
                <Bouton
                    image={"/ressources/images/logo_insta.png"}
                    className={"footer-btn-image"}
                    onClick={() => alert("Insta cliquée !")}
                    imageWidth={30}
                    imageHeight={30}
                />
                <Bouton
                    image={"/ressources/images/logo_discord.png"}
                    className={"footer-btn-image"}
                    onClick={() => alert("discord cliqué !")}
                    imageWidth={30}
                    imageHeight={30}
                />
            </div>
        </div>
    );
}

export default Header;
