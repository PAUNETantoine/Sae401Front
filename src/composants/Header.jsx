import "../styles/composants/Header.css";
import Bouton from "./Bouton";
import { Link } from 'react-router-dom'; // Importation de Link de React Router

function Header()
{
    return (
        <div>
            <nav>
                <Link to="/evenements"><Bouton texte="Événements" className="header-btn"/></Link>
                <Link to="/boutique"><Bouton texte="Boutique" className="header-btn"/></Link>

                <Link to="/">
                    <Bouton
                        image={"/ressources/images/logo_bde.png"}
                        className={"header-btn-image"}
                        onClick={() => alert("Image cliquée !")}
                        widthBtn={200}/>
                </Link>

                <Link to="/Contact"><Bouton texte="Contact" className="header-btn"/></Link>
                <Link to="/Connexion"><Bouton texte="Se connecter" className="header-btn"/></Link>
            </nav>
        </div>
    );
}

export default Header;
