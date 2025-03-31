import {useEffect, useState} from "react";
import "../styles/composants/Carroussel.css"

function Carroussel({ tabElementsEvenement }) {
    const [elements, setElements] = useState(tabElementsEvenement);

    useEffect(() => {
        // Pas besoin de modifier directement le DOM, on utilise React pour gérer les classes
    }, [elements]); // Exécuté à chaque changement de `elements`

    const nextEvent = () => {
        setElements((prevElements) => {
            return [prevElements[2], prevElements[0], prevElements[1]];
        });
    };

    const prevEvent = () => {
        setElements((prevElements) => {
            return [prevElements[1], prevElements[2], prevElements[0]];
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

            {/* Conteneur des boutons déplacé ici */}
            <div className="boutons-container">
                <button className="prev" onClick={prevEvent}>&#60;</button>
                <button className="next" onClick={nextEvent}>&#62;</button>
            </div>
        </div>
    );
}

export default Carroussel;