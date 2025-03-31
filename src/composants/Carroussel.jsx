import { useState } from "react";
import "../styles/composants/Carroussel.css";
import Bouton from "./Bouton";

function Carroussel({ tabElementsEvenement, positionBtn }) {
    const [selectedIndex, setSelectedIndex] = useState(1);

    // Fonction pour aller à l'image du dessus
    const moveUp = () => {
        setSelectedIndex((prevIndex) => (prevIndex - 1 + tabElementsEvenement.length) % tabElementsEvenement.length);
    };

    // Fonction pour aller à l'image du dessous
    const moveDown = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % tabElementsEvenement.length);
    };

    return (
        <div className={positionBtn === "droite" ? "carroussel-wrapper-gauche" : "carroussel-wrapper-droite"}>
            <h2 className="carroussel-title">Événements</h2>
            <div id="carroussels">
                <div className="carroussel-container">
                    {tabElementsEvenement.map((item, index) => {
                        let className = "cache"; // Par défaut, cacher l'élément
                        if (index === selectedIndex) className = "selectionne";
                        else if (index === (selectedIndex - 1 + tabElementsEvenement.length) % tabElementsEvenement.length) className = "dessus";
                        else if (index === (selectedIndex + 1) % tabElementsEvenement.length) className = "dessous";

                        return (
                            <div
                                key={index}
                                className={`ElementCarrousselEvent ${className}`}
                                style={{ backgroundImage: `url(${item.Image})` }}
                                onClick={() => setSelectedIndex(index)}
                            >
                                <p>{item.Titre}</p>
                            </div>
                        );
                    })}
                </div>

                {positionBtn === "droite" && <div className="boutons-navigation-droite">
                    <Bouton className="btn-up" onClick={moveUp} image="/ressources/images/flecheHaut.png" widthBtn={80} heightBtn={80} />
                    <Bouton className="btn-down" onClick={moveDown} image="/ressources/images/flecheBas.png" widthBtn={80} heightBtn={80} />
                </div>}
                {positionBtn === "gauche" && <div className="boutons-navigation-gauche">
                    <Bouton className="btn-up" onClick={moveUp} image="/ressources/images/flecheHaut.png" widthBtn={80} heightBtn={80} />
                    <Bouton className="btn-down" onClick={moveDown} image="/ressources/images/flecheBas.png" widthBtn={80} heightBtn={80} />
                </div>}
            </div>
        </div>
    );
}

export default Carroussel;
