import { useState } from "react";
import "../styles/composants/Carroussel.css";
import Bouton from "./Bouton";

function Carroussel({ tabElementsEvenement, positionBtn, text }) {
    const [selectedIndex, setSelectedIndex] = useState(1);

    // Fonction pour aller à l'image du dessus
    const moveUp = () => {
        setSelectedIndex((prevIndex) => (prevIndex - 1 + tabElementsEvenement.length) % tabElementsEvenement.length);
    };

    // Fonction pour aller à l'image du dessous
    const moveDown = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % tabElementsEvenement.length);
    };

    const ouvrirPopupText = () => {

    }

    return (
        <div className={positionBtn === "droite" ? "carroussel-wrapper-gauche" : "carroussel-wrapper-droite"}>
            <h2 className="carroussel-title">{text}</h2>
            <div id="carroussels">

                {positionBtn === "gauche" && <div className="boutons-navigation-gauche">
                    <Bouton className="btn-up" onClick={moveUp} image="/ressources/images/flecheHaut.png" widthBtn={80} heightBtn={80} />
                    <Bouton className="btn-down" onClick={moveDown} image="/ressources/images/flecheBas.png" widthBtn={80} heightBtn={80} />
                </div>}

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
                                onClick={() => setSelectedIndex(index)}
                            >
                                <div className="txtCarousselContainer">
                                    {item.Image && <p className={"titreCaroussel-img"}>{item.Titre}</p>}
                                    {item.text && (
                                        <>
                                            <p className={"titreCaroussel"}>{item.Titre}</p>
                                            <p className="txtZoneCaroussel">{item.text}</p>

                                            <Bouton
                                                className={"btn-lireSuite"}
                                                onClick={ouvrirPopupText}
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

                {positionBtn === "droite" && <div className="boutons-navigation-droite">
                    <Bouton className="btn-up" onClick={moveUp} image="/ressources/images/flecheHaut.png" widthBtn={80} heightBtn={80} />
                    <Bouton className="btn-down" onClick={moveDown} image="/ressources/images/flecheBas.png" widthBtn={80} heightBtn={80} />
                </div>}
            </div>
        </div>
    );
}

export default Carroussel;
