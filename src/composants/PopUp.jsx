import "../styles/composants/PopUp.css";
import Bouton from "./Bouton";

function PopUp({ id, className, setPopUp, children }) {

    const handleClose = () => {
        setPopUp(null); // Updates the state to close the popup
    };

    return (
        <div id={id} className={className === "cache" ? "popup-hidden" : "popup-visible"}>
            {/* Blurred overlay */}
            <div className="popup-overlay" onClick={handleClose}></div>

            {/* Pop-up content */}
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
                {children} {/* Popup content, whether it's an event or a newsletter */}
            </div>
        </div>
    );
}

export default PopUp;

