import Header from "../composants/Header";
import Footer from "../composants/Footer";
import CaseBoutique from "../composants/CaseBoutique";
import {useEffect, useState} from "react";
import "../styles/pages/Boutique.css"
import PopUp from "../composants/PopUp";
import Bouton from "../composants/Bouton";


function Boutique()
{

    const [tabProduitsBoutique, setTabProduitsBoutique] = useState([
        {
            nom : "Sweat blanc BDE",
            image : "/ressources/images/produits/sweat-blanc.png",
            prix : 40,
            quantite : 15
        },
        {
            nom : "Sweat noir BDE",
            image : "/ressources/images/produits/sweat-noir.png",
            prix : 40,
            quantite : 15
        },
        {
            nom : "Tasse BDE",
            image : "/ressources/images/produits/tasse.png",
            prix : 6,
            quantite : 10
        },
        {
            nom : "Stylo BDE",
            image : "/ressources/images/produits/stylo.png",
            prix : 3,
            quantite : 32
        },
        {
            nom : "Gourde BDE",
            image : "/ressources/images/produits/gourde.png",
            prix : 10,
            quantite : 4
        },
        {
            nom : "Bloc Note BDE",
            image : "/ressources/images/produits/bloc-note.png",
            prix : 8,
            quantite : 49
        },
        {
            nom : "Casquette BDE",
            image : "/ressources/images/produits/casquette-helice.png",
            prix : 13,
            quantite : 14
        },
    ]);

    const [panier, setPanier] = useState([tabProduitsBoutique[1], tabProduitsBoutique[1], tabProduitsBoutique[0], tabProduitsBoutique[4]]);
    const [popUp, setPopUp] = useState(false)

    const  nbElementPanier = (element) => {
        let cpt = 0;

        for(let i = 0 ; i < panier.length ; i++)
        {
            if(panier[i].nom === element.nom)
            {
                cpt++;
            }
        }
        return cpt;
    }

    // Gestion de la popup
    const handlePanier = () => {
        setPopUp(true);
    }

    const handleClosePopUp = () => {
        setPopUp(false);
    }


    useEffect(() => {
        if(popUp) {
            document.getElementById("popUpPanier").classList.remove("cache");
        }else {
            document.getElementById("popUpPanier").classList.add("cache");
        }
    },[popUp])



    return (
        <>
            <Header></Header>

            <PopUp id={"popUpPanier"} className={popUp ? "popup-visible" : "cache"} setPopUp={handleClosePopUp}>

            </PopUp>

            <Bouton texte={"Mon Panier"}></Bouton>
            <div className="case-produit-container">
                {tabProduitsBoutique.map((item, index) => {
                    return(
                        <CaseBoutique element={item} nbElementPanier={nbElementPanier} setPanier={setPanier}/>
                    )
                })}
            </div>
            <Footer></Footer>
        </>
    )
}

export default Boutique;