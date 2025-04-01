import "../styles/composants/Header.css";
import Bouton from "./Bouton";
import { Link } from 'react-router-dom';

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
                        imageWidth={200} />
                </Link>

                <Link to="/contact"><Bouton texte="Contact" className="header-btn"/></Link>
                <Link to="/connexion"><Bouton texte="Se connecter" className="header-btn"/></Link>
            </nav>
        </div>
    );
}

export default Header;
