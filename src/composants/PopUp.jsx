import "../styles/composants/PopUp.css";
import Bouton from "./Bouton";

function PopUp({ id, className, setPopUp, children }) {

    const handleClose = () => {
        setPopUp(null); // Met à jour l'état pour fermer la popup
    };

    return (
        <div id={id} className={className === "cache" ? "popup-hidden" : "popup-visible"}>
            {/* Superposition floutée */}
            <div className="popup-overlay" onClick={handleClose}></div>

            {/* Contenu de la pop-up */}
            <div className="popup-container">
                <Bouton
                    image={"/ressources/images/closeBtn.png"}
                    className={"btn-img-close"}
                    onClick={handleClose}
                    imageHeight={60}
                    imgWidth={60}
                    btnHeight={60}
                    btnWidth={60}
                />
                {children} {/* Contenu de la popup, qu'il soit un événement ou une newsletter */}
            </div>
        </div>
    );
}

export default PopUp;
