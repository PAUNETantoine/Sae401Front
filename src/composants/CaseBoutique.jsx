import React from "react";
import "../styles/composants/CaseBoutique.css"
import Bouton from "./Bouton";

function CaseEvent ({element, nbElementPanier, setPanier})
{

    const handleSelectionProduit = () => {

    }

    const handleAjouterProduit = () => {
        if(nbElementPanier(element) < element.quantite)
        {
            setPanier((prevProduit) => [...prevProduit, element]);
        }
    }

    const handleSupprimerProduit = () => {
        setPanier((prevProduit) => {
            const index = prevProduit.findIndex((produit) => produit.nom === element.nom);
            if (index !== -1) {
                const newPanier = [...prevProduit];
                newPanier.splice(index, 1); // Supprime uniquement la première occurrence
                return newPanier;
            }
            return prevProduit;
        });
    };



    return (
        <>
            <div className="case-produit" onClick={handleSelectionProduit}>
                <img className={"produit-image"} src={element.image ? element.image : "/ressources/images/comming-soon.jpg"}/>
                <p className={"produit-title"}>{element.nom}</p>
                <p className={"produit-prix"}>{element.prix + "€"}</p>
                <div className={"produit-qtt"}><Bouton texte={"-"} onClick={handleSupprimerProduit}></Bouton><p className={"produit-qtt-choix"}>{nbElementPanier(element)}</p><Bouton texte={"+"} onClick={handleAjouterProduit}></Bouton></div>
            </div>
        </>
    )
}

export default CaseEvent;