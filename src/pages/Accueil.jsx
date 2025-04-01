import "../styles/pages/Accueil.css";
import Header from "../composants/Header";
import Carroussel from "../composants/Carroussel";
import Footer from "../composants/Footer";
import React, {useEffect} from "react";
import PopUp from "../composants/PopUp";

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
        },
        {
            Titre: "Bozoterie 25/80",
            Image : "/ressources/images/comming-soon.jpg"
        }
    ])

    const [tabElementsNewsletter, setTabElementsNewsletter] = React.useState([
        {
            Titre: "Le Bde : Au coeur de la vie étudiante",
            text : "Le bde à pour projet de rassembler les étudiants en informatique afin de leur donne l’oportunité de découvrir le reste de la promo tout en faisant des soirées amusantes avec de nombreuses activités."
        },
        {
            Titre: "Invitation à la soirée d'intégration !",
            text : "Vous l'attendiez depuis longtemps ! Cette soirée d'intégration arrive enfin ! Vous pourrez vous retrouvez tous ensemble le 22 février 2025 pour fêter la nouvelle année tous ensemble ! Toutes les promos sont invitées."
        },
        {
            Titre: "La conférence du 20/03",
            text : "Il est très important pour tous les étudiants de découvrir des professionnels du métier pour devenir un futur développeur ! Voici pourquoi nous avons organiser une conférence avec des vrais développeurs au sein de l'entreprise dataconcept."
        }
    ])

    const [popUp, setPopUp] = React.useState(true);

    useEffect(() => {
        if (popUp) {
            document.getElementById("PopUp").classList.remove("cache");
        }
    }, [popUp]);

    return (
        <>
            <div>
                <Header />
                <div className="carroussel-container-global">
                    <Carroussel
                        tabElementsEvenement={tabElementsEvenement}
                        positionBtn={"droite"}
                        text="Événements"
                    />
                    <Carroussel
                        tabElementsEvenement={tabElementsNewsletter}
                        positionBtn={"gauche"}
                        text="Newsletter"
                    />
                </div>

                <Footer />
            </div>
            <PopUp id={"PopUp"} className={popUp ? "" : "cache"} />
        </>
    );
}


export default Accueil;