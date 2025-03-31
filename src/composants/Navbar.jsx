import "/src/styles/composants/Navbar.css";
import Bouton from "./Bouton";

function Navbar() {
    return (
        <nav className="navbar">
            <Bouton texte="Événements" className="nav-btn" onClick={() => alert("Événements cliqué !")} />
            <Bouton texte="Boutique" className="nav-btn" onClick={() => alert("Boutique cliqué !")} />
        </nav>
    );
}

export default Navbar;
