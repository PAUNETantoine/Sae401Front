import "../styles/composants/Header.css";
import Bouton from "./Bouton";

function Header()
{
    return (
        <div>
            <nav className="navbar">
                <Bouton texte="Événements" className="nav-btn" onClick={() => alert("Événements cliqué !")} />
                <Bouton texte="Boutique" className="nav-btn" onClick={() => alert("Boutique cliqué !")} />

                <Bouton
                    image={"/ressources/images/logo_bde.png"}
                    className={"nav-btn-image"}
                    onClick={() => alert("Image cliquée !")}
                    widthBtn={200}/>

                <Bouton texte="Contact" className="nav-btn" onClick={() => alert("Contact cliqué !")} />
                <Bouton texte="Se connecter" className="nav-btn" onClick={() => alert("Se connecter cliqué !")} />
            </nav>
        </div>
    );
}

export default Header;
