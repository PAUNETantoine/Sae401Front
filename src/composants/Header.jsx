import "../styles/composants/Header.css";
import Bouton from "./Bouton";

function Header()
{
    return (
        <div>
            <nav>
                <Bouton texte="Événements" className="header-btn" onClick={() => alert("Événements cliqué !")} />
                <Bouton texte="Boutique" className="header-btn" onClick={() => alert("Boutique cliqué !")} />

                <Bouton
                    image={"/ressources/images/logo_bde.png"}
                    className={"header-btn-image"}
                    onClick={() => alert("Image cliquée !")}
                    widthBtn={200}/>

                <Bouton texte="Contact" className="header-btn" onClick={() => alert("Contact cliqué !")} />
                <Bouton texte="Se connecter" className="header-btn" onClick={() => alert("Se connecter cliqué !")} />
            </nav>
        </div>
    );
}

export default Header;
