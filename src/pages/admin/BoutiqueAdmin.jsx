import Header from "../../composants/Header";
import Footer from "../../composants/Footer";
import CaseBoutique from "../../composants/CaseBoutique";
import React, {useEffect, useState, useRef} from "react";
import "../../styles/pages/Boutique.css"
import PopUp from "../../composants/PopUp";
import Bouton from "../../composants/Bouton";
import emailjs from "emailjs-com";
import {getBoutique} from "../../scripts/ConnexionBoutique";

function BoutiqueAdmin() {

    const [tabProduitsBoutique, setTabProduitsBoutique] = useState([
        {
            nom: "Sweat blanc BDE",
            image: "/ressources/images/produits/sweat-blanc.png",
            prix: 40,
            quantite: 15
        },
        {
            nom: "Sweat noir BDE",
            image: "/ressources/images/produits/sweat-noir.png",
            prix: 40,
            quantite: 15
        },
        {
            nom: "Tasse BDE",
            image: "/ressources/images/produits/tasse.png",
            prix: 6,
            quantite: 10
        },
        {
            nom: "Stylo BDE",
            image: "/ressources/images/produits/stylo.png",
            prix: 3,
            quantite: 32
        },
        {
            nom: "Gourde BDE",
            image: "/ressources/images/produits/gourde.png",
            prix: 10,
            quantite: 4
        },
        {
            nom: "Bloc Note BDE",
            image: "/ressources/images/produits/bloc-note.png",
            prix: 8,
            quantite: 49
        },
        {
            nom: "Casquette BDE",
            image: "/ressources/images/produits/casquette-helice.png",
            prix: 13,
            quantite: 14
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
    const [popUpPanier, setPopUpPanier] = useState(null);
    const [popUpAjoutModif, setPopUpAjoutModif] = useState(null);
    const [selectedProduit, setSelectedProduit] = useState(null);
    const [nouveauProduit, setNouveauProduit] = useState({nom: "", image: "", prix: 0, quantite: 0});
    const [isModifying, setIsModifying] = useState(false);
    const formRef = useRef(null);

    const nbElementPanier = (element) => {
        let cpt = 0;

        for (let i = 0; i < panier.length; i++) {
            if (panier[i].nom === element.nom) {
                cpt++;
            }
        }
        return cpt;
    }

    const handlePanier = () => {
        setPopUpPanier("panier");
    };

    const handleAjoutModif = (produit = null) => {
        if (produit) {
            setSelectedProduit(produit);
            setNouveauProduit({...produit});
            setIsModifying(true);
        } else {
            setSelectedProduit(null);
            setNouveauProduit({nom: "", image: "", prix: 0, quantite: 0});
            setIsModifying(false);
        }
        setPopUpAjoutModif("ajoutModif");
    };

    const handleClosePopUp = () => {
        setPopUpPanier(null);
        setPopUpAjoutModif(null);
        setSelectedProduit(null);
        setNouveauProduit({nom: "", image: "", prix: 0, quantite: 0});
        setIsModifying(false);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNouveauProduit(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const ajouterProduit = () => {
        setTabProduitsBoutique(prev => [...prev, nouveauProduit]);
        setNouveauProduit({nom: "", image: "", prix: 0, quantite: 0});
        handleClosePopUp();
    };

    const modifierProduit = () => {
        setTabProduitsBoutique(prev =>
            prev.map(produit =>
                produit.nom === selectedProduit.nom ? nouveauProduit : produit
            )
        );
        handleClosePopUp();
    };

    const supprimerProduit = (index) => {
        setTabProduitsBoutique(prev => {
            const copy = [...prev];
            copy.splice(index, 1);
            return copy;
        });
    };

    const handleAjouterProduit = (element) => {
        if (nbElementPanier(element) < element.quantite) {
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

        if (panier.length <= 0) {
            alert("Aucun produit dans votre panier")
            return;
        }

        const produitsCommande = panier.reduce((acc, produit) => {
            if (!acc[produit.nom]) {
                acc[produit.nom] = {...produit, quantite: 1};
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

        {
            panier.map((produit, index) => (
                prix += produit.prix
            ))
        }

        return prix;
    }

    return (
        <>
            <Header/>

            {popUpPanier === "panier" && (
                <PopUp id={"popUpPanier"} className={"popup-visible"} setPopUp={handleClosePopUp}>
                    <div className={"titre-popup-inscriptions"}>
                        <span>Mon Panier</span>
                        <img src={"/ressources/images/panier.png"} width={50} height={50}/>
                    </div>
                    <div className={"zone-text-popup-inscriptions"}>
                        {Object.values(
                            panier.reduce((produitsUniques, produit) => {
                                if (!produitsUniques[produit.nom]) {
                                    produitsUniques[produit.nom] = produit;
                                }
                                return produitsUniques;
                            }, {})
                        ).map((produit, index) => (
                            <div className={"inscription-container"} key={index}>
                                <div className={"ligne-produit"}>
                                    <p className={"nom-produit-panier"}>{"> " + produit.nom + ": "}</p>
                                    <p className={"prix-produit-panier"}>{produit.prix}€</p>
                                    <div className={"produit-qtt-panier"}>
                                        <Bouton className="bouton-qtt-panier" texte={"-"}
                                                onClick={() => handleSupprimerProduit(produit)}/>
                                        <span className={"produit-qtt-choix"}>{nbElementPanier(produit)}</span>
                                        <Bouton className="bouton-qtt-panier" texte={"+"}
                                                onClick={() => handleAjouterProduit(produit)}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {panier.length === 0 && <p>Aucun produit dans le panier</p>}

                        <p>Total : {getPrixTotal()}€</p>

                        <div className={"bouton-commander-container"}>
                            <Bouton texte={"Commander"} className={"btn-action"} onClick={handleCommanderProduits}/>
                        </div>
                    </div>
                </PopUp>
            )}

            {popUpAjoutModif === "ajoutModif" && (
                <PopUp id={"popUpAjoutModif"} className={"popup-visible"} setPopUp={handleClosePopUp}>
                    <div className={"titre-popup-inscriptions"}>
                        <span>{isModifying ? "Modifier Produit" : "Ajouter Produit"}</span>
                    </div>
                    <div className={"zone-text-popup-inscriptions"}>
                        <form ref={formRef} className="formulaire-produit">
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    placeholder="Nom du produit"
                                    value={nouveauProduit.nom}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    placeholder="URL de l'image"
                                    value={nouveauProduit.image}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="prix">Prix:</label>
                                <input
                                    type="number"
                                    id="prix"
                                    name="prix"
                                    placeholder="Prix"
                                    value={nouveauProduit.prix}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantite">Quantité:</label>
                                <input
                                    type="number"
                                    id="quantite"
                                    name="quantite"
                                    placeholder="Quantité"
                                    value={nouveauProduit.quantite}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="boutons">
                                <Bouton
                                    texte={isModifying ? "Enregistrer" : "Ajouter"}
                                    onClick={isModifying ? modifierProduit : ajouterProduit}
                                    className={"btn-action"}
                                />
                            </div>
                        </form>
                    </div>
                </PopUp>
            )}

            <div className="bouton-container">
                <Bouton
                    onClick={() => handleAjoutModif()}
                    texte={"Ajouter Produit"}
                    className={"btn-action"}
                />
            </div>

            <div className="case-produit-container">
                {tabProduitsBoutique.map((item, index) => (
                    <div key={index}>
                        <CaseBoutique element={item} nbElementPanier={nbElementPanier} setPanier={setPanier}/>
                        <div key={index} className="btns-modif">
                            <Bouton className="btn-action" texte="Modifier" onClick={() => handleAjoutModif(item)}/>
                            <Bouton className="btn-action" texte="Supprimer" onClick={() => supprimerProduit(index)}/>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default BoutiqueAdmin;
