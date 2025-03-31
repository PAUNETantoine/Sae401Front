import { useState } from "react";
import "../styles/composants/Carroussel.css";
import Bouton from "./Bouton";

function Carroussel({ tabElementsEvenement }) {
    const [selectedIndex, setSelectedIndex] = useState(1); // Commence avec l'élément du milieu

    // Fonction pour aller à l'image du dessus
    const moveUp = () => {
        setSelectedIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    // Fonction pour aller à l'image du dessous
    const moveDown = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    return (
        <div id="carroussels">
            <div className="carroussel-container">
                {tabElementsEvenement.map((item, index) => (
                    <div
                        key={index}
                        className={`ElementCarrousselEvent ${
                            index === selectedIndex ? "selectionne" :
                                index === (selectedIndex + 2) % 3 ? "dessus" : "dessous"
                        }`}
                        style={{ backgroundImage: `url(${item.Image})` }}
                        onClick={() => setSelectedIndex(index)} // ✅ Ajout du clic
                    >
                        <p>{item.Titre}</p>
                    </div>
                ))}
            </div>

            {/* Boutons de navigation haut/bas */}
            <div className="boutons-navigation">
                <Bouton
                    className="btn-up"
                    onClick={moveUp}
                    image="/ressources/images/flecheHaut.png"
                    widthBtn={80}
                    heightBtn={80}
                />
                <Bouton
                    className="btn-down"
                    onClick={moveDown}
                    image="/ressources/images/flecheBas.png"
                    widthBtn={80}
                    heightBtn={80}
                />
            </div>
        </div>
    );
}

export default Carroussel;
