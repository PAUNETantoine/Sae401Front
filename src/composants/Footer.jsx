import "../styles/composants/Footer.css";
import Bouton from "./Bouton";

function Header()
{

    const handleImageClick = () => {
        alert("Image cliquée !");
    };

    return (
        <div>
            <nav className="navbar">
                <Bouton texte="Événements" className="nav-btn" onClick={() => alert("Événements cliqué !")} />
                <Bouton texte="Boutique" className="nav-btn" onClick={() => alert("Boutique cliqué !")} />

                <button className="nav-btn-image" onClick={handleImageClick}>
                    <img src="/ressources/images/logo_bde.png" className="image" />
                </button>

                <Bouton texte="Contact" className="nav-btn" onClick={() => alert("Événements cliqué !")} />
                <Bouton texte="Se connecter" className="nav-btn" onClick={() => alert("Boutique cliqué !")} />
            </nav>
        </div>
    );
}

export default Header;
