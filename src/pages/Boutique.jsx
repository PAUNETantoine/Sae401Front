import Header from "../composants/Header";
import Footer from "../composants/Footer";
import CaseBoutique from "../composants/CaseBoutique";
import React, {useEffect, useState} from "react";
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


    const handleAjouterProduit = (element) => {
        setPanier((prevPanier) => {
            console.log("Tentative d'ajout du produit :", element.nom);

            const count = prevPanier.filter(produit => produit.nom === element.nom).length;

            console.log("Quantité actuelle dans le panier :", count, " / Stock disponible :", element.quantite);

            if (count >= element.quantite) {
                console.log("Stock atteint, ajout impossible !");
                return prevPanier;
            }

            console.log("Ajout réussi !");
            return [...prevPanier, element];
        });
    };


    const handleSupprimerProduit = (element) => {
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
            <Header></Header>

            <PopUp id={"popUpPanier"} className={popUp ? "popup-visible" : "cache"} setPopUp={handleClosePopUp}>
                <div className={"titre-popup-inscriptions"}>
                    <span>Mon Panier</span>
                    <img src={"/ressources/images/panier.png"} width={50} height={50} />
                </div>
                <div className={"zone-text-popup-inscriptions"}>
                    {Object.values(
                        panier.reduce((produitsUniques, produit) => {
                            if (!produitsUniques[produit.nom]) {
                                produitsUniques[produit.nom] = { ...produit, quantite: 0 };
                            }
                            produitsUniques[produit.nom].quantite++;
                            return produitsUniques;
                        }, {})
                    ).map((produit, index) => (
                        <div className={"inscription-container"} key={index}>
                            <div className={"ligne-produit"}>
                                <p className={"nom-produit-panier"}>{"> " + produit.nom + ": "}</p>
                                <p className={"prix-produit-panier"}>{produit.prix}€</p>
                                <div className={"produit-qtt-panier"}>
                                    <Bouton className="bouton-qtt-panier" texte={"-"} onClick={() => handleSupprimerProduit(produit)} />
                                    <span className={"produit-qtt-choix"}>{produit.quantite}</span>
                                    <Bouton className="bouton-qtt-panier" texte={"+"} onClick={() => handleAjouterProduit(produit)} />
                                </div>
                            </div>
                        </div>
                    ))}
                    {panier.length === 0 && <p>Aucun produit dans le panier</p>}
                </div>
            </PopUp>




            <div className="bouton-container">
                <Bouton
                    onClick={handlePanier}
                    texte={"Mon Panier"}
                    image={"/ressources/images/panier.png"}
                    imageHeight={30}
                    imageWidth={30}
                    className={"btn-action"}
                />
            </div>

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