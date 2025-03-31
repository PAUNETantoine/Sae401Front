import "../styles/pages/Accueil.css";
import Navbar from "../composants/Navbar";
import Carroussel from "../composants/Carroussel";
import React from "react";

function Accueil()
{
    const [tabElementsEvenement, setTabElementsEvenement] = React.useState([
        {
            Titre: "LaserGame 25/04",
            Image : "/ressources/images/laserGame.webp"
        },
        {
            Titre: "Poker 20/04",
            Image : "/ressources/images/poker.jpg"
        },
        {
            Titre: "Conference 20/03",
            Image : "/ressources/images/conférence.png"
        }
    ])

    const [tabElementsNewsletter, setTabElementsNewsletter] = React.useState([
        {
            Titre: "Le Bde : Au coeur de la vie étudiante",
            text : "Le bde à pour projet de rassembler les étudiants en informatique afin de leur donne l’oportunité de découvrir le reste de la promo tout en faisant des soirées amusantes avec de nombreuses activités."
        },
        {
            Titre: "Poker 20/04",
            text : ""
        },
        {
            Titre: "Conference 20/03",
            text : ""
        }
    ])





    return (
        <div>
            <Navbar></Navbar>
            <Carroussel tabElementsEvenement={tabElementsEvenement} tabElementsNewsletter={tabElementsNewsletter}></Carroussel>
        </div>
    );
}


export default Accueil;