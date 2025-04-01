import "../styles/composants/PopUp.css";
import Bouton from "./Bouton";
import Accueil from "../pages/Accueil";

function PopUp({ id, className }) {
    const handleClose = () => {
        document.getElementById(id).classList.add("cache"); // Fermer la pop-up
    };

    return (
        <div id={id} className={className}>
            {/* Superposition floutée */}
            <div className="popup-overlay" onClick={handleClose}></div>

            {/* Contenu de la pop-up */}
            <div className="popup-container">
                <Bouton
                    image={"/ressources/images/closeBtn.png"}
                    className={"btn-img-close"}
                    onClick={handleClose}
                />
                <p>Contenu de la pop-up</p>
            </div>
        </div>
    );
}

export default PopUp;