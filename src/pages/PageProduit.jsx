import Header from "../composants/Header";
import Footer from "../composants/Footer";
import {useParams} from "react-router-dom";
import {useState} from "react";
import "../styles/pages/PageProduit.css"
import Bouton from "../composants/Bouton";

function PageProduit()
{

    //Simulation du back
    const [tabProduitsBoutique, setTabProduitsBoutique] = useState([
        {
            nom : "Sweat blanc BDE",
            image : "/ressources/images/produits/sweat-blanc.png",
            prix : 40,
            quantite : 15,
            description : "Le Sweat blanc officiel du BDE !\n Logo imprimé\n 80% coton, 20% polyester",
            taille : ["XL", "L", "M", "S", "XS"]
        },
        {
            nom : "Sweat noir BDE",
            image : "/ressources/images/produits/sweat-noir.png",
            prix : 40,
            quantite : 15,
            description : "Le Sweat noir officiel du BDE !\n Logo imprimé\n 80% coton, 20% polyester",
            taille : ["XL", "L", "M", "S", "XS"]

        },
        {
            nom : "Tasse BDE",
            image : "/ressources/images/produits/tasse.png",
            prix : 6,
            quantite : 10,
            description: "Tasse aux couleurs du BDE 25 CL",
            taille : ""
        },
        {
            nom : "Stylo BDE",
            image : "/ressources/images/produits/stylo.png",
            prix : 3,
            quantite : 32,
            description : "Le stylo du BDE pour nous soutenir ( made in china )",
            taille : ""
        },
        {
            nom : "Gourde BDE",
            image : "/ressources/images/produits/gourde.png",
            prix : 10,
            quantite : 4,
            description: "La gourde thermostatique du BDE 100% métal",
            taille : ""
        },
        {
            nom : "Bloc Note BDE",
            image : "/ressources/images/produits/bloc-note.png",
            prix : 8,
            quantite : 49,
            description: "Bon j'avoue que ça c'est useless",
            taille : ""
        },
        {
            nom : "Casquette BDE",
            image : "/ressources/images/produits/casquette-helice.png",
            prix : 13,
            quantite : 14,
            description: "Casquette pour venir participer à l'événement de la bozoterie",
            taille : ""
        },
    ]);


    const { nom } = useParams();

    const [produit, setProduit] = useState(() => {
        return tabProduitsBoutique.find(p => p.nom === nom);
    });

    const [tailleSelect, setTailleSelect] = useState(null)


    return(
        <>
            <Header />
            <div className="PageProduit-container">
                <div className={"PageProduit-image"}>
                    <img src={produit.image} alt={produit.nom}/>
                </div>

                <div className={"PageProduit-description-produit"}>
                    <p className={"PageProduit-nom-produit"}>{produit.nom}</p>
                    <p className={"description-produit"}>{produit.description}</p>
                    <div className="PageProduit-actions">
                        <div className="PageProduit-tailles">
                            {produit.taille && produit.taille.map((taille, i) => (
                                <Bouton key={i} className={taille === tailleSelect ? "btn-action-select" : "btn-action"} texte={taille} onClick={() => setTailleSelect(taille)} />
                            ))}
                        </div>
                        <div className="PageProduit-bottom">
                            <p className="prix-produit">{produit.prix}€</p>
                            <Bouton className="btn-action" texte="Ajouter au panier" image="/ressources/images/panier.png" imageWidth={70} imageHeight={70} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PageProduit;