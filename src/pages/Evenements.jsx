import Header from "../composants/Header";
import Footer from "../composants/Footer";
import CaseEvent from "../composants/CaseEvent";
import React, {useEffect, useState} from "react";
import "../styles/pages/Evenements.css"
import BoutonDropBox from "../composants/BoutonDropBox";
import Bouton from "../composants/Bouton";
import PopUp from "../composants/PopUp";
import inscription from "./Inscription";

function Evenements()
{
    const [tabElementsEvenement, setTabElementsEvenement] = useState([
        {
            Titre: "Laser Game",
            Image: "/ressources/images/laserGame.webp",
            date: "25/04",
            description: "Laser Game au Havre en équipes de 8.",
            adresse : "8 rue du laser game le Havre 76600",
            prix : "15€",
            inscrits : "10/25",
            note : "",
            adresseLien : "https://www.google.com/maps/place/Institut+universitaire+de+technologie+du+Havre/@49.5161141,0.1624614,17z/data=!4m14!1m7!3m6!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!2sInstitut+universitaire+de+technologie+du+Havre!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j!3m5!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"

        },
        {
            Titre: "Poker",
            Image: "/ressources/images/poker.jpg",
            date: "20/04",
            description: "Parties de poker avec cash price pour les gagnants.",
            adresse : "28 rue du poker le Havre 76660",
            prix : "2€",
            inscrits : "8/12",
            note : "4.5 / 5",
            avis : [
                {
                    auteur: "Antoine",
                    avis : "Pas mal mais simplement ça mériterais d'être un peu plus grand",
                    note : "3.5/5"
                },
                {
                    auteur: "Antonin",
                    avis : "c'était bien mais ça vaut pas son prix",
                    note : "2.5/5"
                }
            ],
            adresseLien : "https://www.google.com/maps/place/Institut+universitaire+de+technologie+du+Havre/@49.5161141,0.1624614,17z/data=!4m14!1m7!3m6!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!2sInstitut+universitaire+de+technologie+du+Havre!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j!3m5!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"

        },
        {
            Titre: "Conference",
            Image: "/ressources/images/conférence.png",
            date: "20/03",
            description: "Conference sur l'informatique et le développement durable.",
            adresse: "12 rue de l'iut Caucriauville 76620",
            prix : "Gratuit",
            inscrits : "25",
            note : "3.9/5",
            avis : [
                {
                    auteur: "Martin",
                    avis : "aberrant",
                    note : "4/5"
                },
                {
                    auteur: "Kiki",
                    avis : "c'était bien",
                    note : "5/5"
                }
            ],
            adresseLien : "https://www.google.com/maps/place/Institut+universitaire+de+technologie+du+Havre/@49.5161141,0.1624614,17z/data=!4m14!1m7!3m6!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!2sInstitut+universitaire+de+technologie+du+Havre!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j!3m5!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"

        },
        {
            Titre: "Bozoterie",
            Image: "/ressources/images/comming-soon.jpg",
            date: "25/08",
            description: "On engage des clowns pour faire les singes en publique venez voir le spectacle",
            adresse: "12 boulevard quoi feur 85468",
            prix : "Gratuit",
            inscrits : "42",
            note : "",
            adresseLien : "https://www.google.com/maps/place/Institut+universitaire+de+technologie+du+Havre/@49.5161141,0.1624614,17z/data=!4m14!1m7!3m6!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!2sInstitut+universitaire+de+technologie+du+Havre!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j!3m5!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"

        },
    ]);

    const [inscriptions, setInscriptions] = useState([tabElementsEvenement[0], tabElementsEvenement[2]]);
    const [elementChoix, setElementChoix] = useState(null);

    const [popUp, setPopUp] = React.useState(false);

    const handleInscriptions = () => {
        setPopUp(true);
    }

    const handleClosePopUp = () => {
        setPopUp(false);
    }


    const [popUpEvent, setPopUpEvent] = React.useState(false);


    const handleClosePopUpEvent = () => {
        setPopUpEvent(false);
    }


    const handlePasserPopUpEvent = (element) => {
        handleClosePopUp();
        setElementChoix(element);
        setPopUpEvent(true);
    }

    const ajouterInscription = (element) => {
        setInscriptions((prevInscriptions) => [...prevInscriptions, element]);
    };

    const annulerEvenement = (event) => {
        setInscriptions((prevInscriptions) =>
            prevInscriptions.filter((inscription) => inscription.Titre !== event.Titre)
        );
        handleClosePopUp();
    };

    const estInscritEvenement = (event) => {
        for(let i = 0 ; i < inscriptions.length; i++)
        {
            if(inscriptions[i].Titre === event.Titre)
            {
                return true;
            }
        }
        return false;
    }


    useEffect(() => {
        if(popUp) {
            document.getElementById("popUpInscriptions").classList.remove("cache");
        }else{
            document.getElementById("popUpInscriptions").classList.add("cache");
        }

        if(popUpEvent)
        {
            if(document.getElementById("popUpEvent"))
            {
                document.getElementById("popUpEvent").classList.remove("cache");
            }
        }else{
            if(document.getElementById("popUpEvent"))
            {
                document.getElementById("popUpEvent").classList.add("cache");
            }        }
    },[popUp, popUpEvent])

    return(
        <div>
            <Header></Header>
            {popUpEvent && (
                <PopUp id={"popUpEvent"} className={popUp ? "popup-visible" : "cache"} setPopUp={handleClosePopUpEvent}>
                    {elementChoix.Image && (
                        <img
                            className={"popup-image"}
                            src={elementChoix.Image}
                            alt={elementChoix.Titre}
                        />
                    )}
                    <p className={"title-text"}>{elementChoix.Titre}</p>
                    <p className={"description-event"}>{elementChoix.description}</p>
                    <p className={"infos-event"}>{"Date : " + elementChoix.date}</p>
                    <p className="infos-event">
                        Adresse : <span className="underline">{elementChoix.adresse}</span>
                    </p>
                    <p className={"infos-event"}>{"Prix de l'inscription : " + elementChoix.prix}</p>
                    {elementChoix.note && (
                        <>
                            <p className={"infos-event"}>{"Note Moyenne : " + elementChoix.note}</p>
                            {elementChoix.avis.map((element, index) => (
                                <p className={"description-event"}>{element.auteur + " : " + element.note + "\n" + element.avis}</p>
                            ))}
                            <div className={"btn-popup"}>
                                <Bouton texte={"Donner son avis"} image={"/ressources/images/star.png"} className={"btn-action"} btnWidth={270} btnHeight={60} imageHeight={40} imageWidth={40}></Bouton>
                            </div>
                        </>
                    )}
                    {!elementChoix.note && (
                        <div className={"btn-popup"}>
                            <Bouton texte={"S'inscrire"} image={"/ressources/images/register.png"} className={"btn-action"} btnWidth={200} btnHeight={60} imageHeight={40} imageWidth={40}></Bouton>
                        </div>
                    )}
                </PopUp>
            )}

            <div className="boutons-container">
                <BoutonDropBox titre={"Notifications"} texte1={"Activées"} texte2={"Désactivées"}></BoutonDropBox>
                <Bouton onClick={handleInscriptions} texte={"Mes inscriptions"} image={"/ressources/images/registered.png"} imageHeight={50} imageWidth={50} width={200} height={70} className={"btn-inscriptions"}></Bouton>

                <PopUp id={"popUpInscriptions"} className={popUp ? "popup-visible" : "cache"} setPopUp={handleClosePopUp}>
                    <div className={"titre-popup-inscriptions"}>
                        <span>Mes inscriptions</span>
                        <img src={"/ressources/images/registered.png"} width={80} height={80} />
                    </div>
                    <div className={"zoneText-popup-inscriptions"}>
                        {inscriptions.map((inscription, index) => (
                            <div className={"inscription-container"} key={index}>
                                <p>{"> " + inscription.Titre + " " + inscription.date + (inscription.note ? " (Passé(e))" : " (À venir)")}</p>
                                {!inscription.note && (
                                    <Bouton texte={"Annuler"} height={70} width={120} className={"btn-action"} onClick={() => annulerEvenement(inscription)} />
                                )}
                                {inscription.note && (
                                    <Bouton texte={"Noter"} height={70} width={120} className={"btn-action"} onClick={() => handlePasserPopUpEvent(inscription)} />
                                )}
                            </div>
                        ))}
                        {!inscriptions[0] && <p>Aucune réservation</p>}
                    </div>
                </PopUp>
            </div>
            <div className="case-event-container">
                {tabElementsEvenement.map((element, index) => (
                    <CaseEvent key={index} element={element} id={index} setInscriptions={ajouterInscription} estInscrit={estInscritEvenement(element)} />
                ))}
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Evenements;