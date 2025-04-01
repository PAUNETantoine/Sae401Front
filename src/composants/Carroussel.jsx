import { useState } from "react";
import "../styles/composants/Carroussel.css";
import Bouton from "./Bouton";

function Carroussel({ tabElementsEvenement, positionBtn, text, setSelectedElement, setPopUp }) {
    const [selectedIndex, setSelectedIndex] = useState(0); // On commence à l'index 0

    // Fonction pour aller à l'image du dessus
    const moveUp = () => {
        setSelectedIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + tabElementsEvenement.length) % tabElementsEvenement.length;
            setSelectedElement(tabElementsEvenement[newIndex]); // Mise à jour du selectedElement
            return newIndex;
        });
    };

    // Fonction pour aller à l'image du dessous
    const moveDown = () => {
        setSelectedIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % tabElementsEvenement.length;
            setSelectedElement(tabElementsEvenement[newIndex]); // Mise à jour du selectedElement
            return newIndex;
        });
    };

    const ouvrirPopupText = (index) => {
        if (index === selectedIndex) {
            setPopUp();
        }
    };

    return (
        <div className={positionBtn === "droite" ? "carroussel-wrapper-gauche" : "carroussel-wrapper-droite"}>
            <h2 className="carroussel-title">{text}</h2>
            <div id="carroussels">
                {positionBtn === "gauche" && (
                    <div className="boutons-navigation-gauche">
                        <Bouton className="btn-up" onClick={moveUp} image="/ressources/images/flecheHaut.png" widthBtn={80} heightBtn={80} />
                        <Bouton className="btn-down" onClick={moveDown} image="/ressources/images/flecheBas.png" widthBtn={80} heightBtn={80} />
                    </div>
                )}

                <div className="carroussel-container">
                    {tabElementsEvenement.map((item, index) => {
                        let className = "cache";
                        if (index === selectedIndex) className = "selectionne";
                        else if (index === (selectedIndex - 1 + tabElementsEvenement.length) % tabElementsEvenement.length) className = "dessus";
                        else if (index === (selectedIndex + 1) % tabElementsEvenement.length) className = "dessous";

                        const isTextOnly = !item.Image; // Vérifie si l'élément n'a pas d'image
                        const elementClass = `ElementCarrousselEvent ${className} ${isTextOnly ? "full-text" : ""}`;

                        return (
                            <div
                                key={index}
                                className={elementClass}
                                style={item.Image ? { backgroundImage: `url(${item.Image})` } : {}}
                                onClick={() => {
                                    ouvrirPopupText(index);
                                    setSelectedIndex(index);
                                    setSelectedElement(item); // Met à jour le selectedElement directement
                                }}
                            >
                                <div className="txtCarousselContainer">
                                    {item.Image && <p className={"titreCaroussel-img"}>{item.Titre + " " + item.date}</p>}
                                    {item.text && (
                                        <>
                                            <p className={"titreCaroussel"}>{item.Titre + " " + (item.date ? item.date : "")}</p>
                                            <p className={"txtZoneCaroussel"}> {item.text.length > 250 ? item.text.substring(0, 250) + "..." : item.text}</p>

                                            <Bouton
                                                className={"btn-lireSuite"}
                                                onClick={() => ouvrirPopupText(index)} // Passer index à ouvrirPopupText
                                                texte={"Lire la suite"}
                                                widthBtn={320}
                                                heightBtn={40}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {positionBtn === "droite" && (
                    <div className="boutons-navigation-droite">
                        <Bouton className="btn-up" onClick={moveUp} image="/ressources/images/flecheHaut.png" widthBtn={80} heightBtn={80} />
                        <Bouton className="btn-down" onClick={moveDown} image="/ressources/images/flecheBas.png" widthBtn={80} heightBtn={80} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Carroussel;
