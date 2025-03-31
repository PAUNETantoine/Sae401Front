import { useEffect, useState } from "react";
import "../styles/composants/Carroussel.css";
import Bouton from "./Bouton";

function Carroussel({ tabElementsEvenement }) {
    const [elements, setElements] = useState(tabElementsEvenement);

    const selectEvent = (index) => {
        setElements((prevElements) => {
            const selectedElement = prevElements[index];

            // Création d'un nouvel ordre où l'élément sélectionné est en 2e position (index 1)
            let newOrder = [...prevElements];

            // On retire l'élément sélectionné
            newOrder.splice(index, 1);

            // On insère l'élément sélectionné à la position 1
            newOrder.splice(1, 0, selectedElement);

            return newOrder;
        });
    };


    return (
        <div id="carroussels">
            <div className="carroussel-container">
                {elements.map((item, index) => (
                    <div
                        key={index}
                        className={`ElementCarrousselEvent ${index === 1 ? "selectionne" : index === 0 ? "dessus" : "dessous"}`}
                        style={{ backgroundImage: `url(${item.Image})` }}
                    >
                        <p>{item.Titre}</p>
                    </div>
                ))}
            </div>

            {/* Boutons de sélection à droite */}
            <div className="boutons-selection-container">
                {elements.map((item, index) => (
                    <Bouton
                        key={index}
                        className=""
                        onClick={() => selectEvent(index)}
                        image={"/ressources/images/imgBtnPoint.png"}
                        widthBtn={40}
                        heightBtn={40}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carroussel;
