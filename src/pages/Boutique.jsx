import Header from "../composants/Header";
import Footer from "../composants/Footer";
import CaseBoutique from "../composants/CaseBoutique";
import React, {useEffect, useState} from "react";
import "../styles/pages/Boutique.css"
import PopUp from "../composants/PopUp";
import Bouton from "../composants/Bouton";
import emailjs from "emailjs-com";
import {getEvenementActu} from "../scripts/ConnexionAccueil";
import {getBoutique} from "../scripts/ConnexionBoutique";


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


    useEffect(() => {
        const fetchData = async () => {
            const data = await getBoutique();
            console.log(data);
        };

        fetchData();
    }, []);



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
        if(nbElementPanier(element) < element.quantite)
        {
            setPanier((prevProduit) => [...prevProduit, element]);
        }
    }

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

    const handleCommanderProduits = () => {

        if(panier.length <= 0)
        {
            alert("Aucun produit dans votre panier")
            return;
        }

        const produitsCommande = panier.reduce((acc, produit) => {
            if (!acc[produit.nom]) {
                acc[produit.nom] = { ...produit, quantite: 1 };
            } else {
                acc[produit.nom].quantite += 1;
            }
            return acc;
        }, {});


        let messageCommande = "Commande :\n";

        Object.values(produitsCommande).forEach((produit) => {
            messageCommande += `- ${produit.nom}, Quantité: ${produit.quantite}, Prix unitaire: ${produit.prix}€\n`;
        });

        messageCommande += `\nTotal: ${getPrixTotal()}€`;

        // Préparer les paramètres pour l'email
        const templateParams = {
            sujet: "Commande Client : " + "Nom Client",
            message: messageCommande,
            to_name: "BDE",
            from_name: "Formulaire Contact",
        };

        // Envoyer l'email avec EmailJS
        emailjs
            .send(
                "service_m8xp49n",  // Service ID EmailJS
                "template_ilonaor",  // Template ID EmailJS
                templateParams,
                "msDmNCZkXw2kEZ3yi" // User ID EmailJS
            )
            .then(
                (response) => {
                    console.log("Email envoyé", response);
                    alert("Votre commande a été envoyée !");
                    setPanier([])
                },
                (err) => {
                    console.error("Échec de l'envoi", err);
                    alert("Une erreur est survenue. Essayez de nouveau.");
                }
            );
    };


    const getPrixTotal = () => {
        let prix = 0;

        {panier.map((produit, index) => (
            prix += produit.prix
        ))}

        return prix;
    }



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
                                produitsUniques[produit.nom] = produit; // Ne pas modifier la quantité
                            }
                            return produitsUniques; // Retourner l'objet mis à jour
                        }, {})
                    ).map((produit, index) => (
                        <div className={"inscription-container"} key={index}>
                            <div className={"ligne-produit"}>
                                <p className={"nom-produit-panier"}>{"> " + produit.nom + ": "}</p>
                                <p className={"prix-produit-panier"}>{produit.prix}€</p>
                                <div className={"produit-qtt-panier"}>
                                    <Bouton className="bouton-qtt-panier" texte={"-"} onClick={() => handleSupprimerProduit(produit)} />
                                    <span className={"produit-qtt-choix"}>{nbElementPanier(produit)}</span>
                                    <Bouton className="bouton-qtt-panier" texte={"+"} onClick={() => handleAjouterProduit(produit)} />
                                </div>
                            </div>
                        </div>
                    ))}
                    {panier.length === 0 && <p>Aucun produit dans le panier</p>}

                    <p>Total : {getPrixTotal()}€</p>

                    <div className={"bouton-commander-container"}>
                        <Bouton texte={"Commander"} className={"btn-action"} onClick={handleCommanderProduits}></Bouton>
                    </div>
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