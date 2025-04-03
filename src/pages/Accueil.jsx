import "../styles/pages/Accueil.css";
import Header from "../composants/Header";
import Carroussel from "../composants/Carroussel";
import Footer from "../composants/Footer";
import React, {useEffect, useState} from "react";
import PopUp from "../composants/PopUp";
import Bouton from "../composants/Bouton";
import {getEvenementActu} from "../scripts/ConnexionAccueil";

function Accueil()
{
    const [tabElementsEvenement] = useState([
        {
            Titre: "Laser Game",
            Image: "/ressources/images/laserGame.webp",
            date: "25/04",
            description: "Laser Game au Havre en équipes de 8.",
            adresse: "8 rue du laser game le Havre 76600",
            prix: "15€",
            inscrits: "10/25",
            note: "",
            adresseLien: "https://www.google.com/maps/place/Institut+universitaire+de+technologie+du+Havre/@49.5161141,0.1624614,17z/data=!4m14!1m7!3m6!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!2sInstitut+universitaire+de+technologie+du+Havre!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j!3m5!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
        },
        {
            Titre: "Poker",
            Image: "/ressources/images/poker.jpg",
            date: "20/04",
            description: "Parties de poker avec cash price pour les gagnants.",
            adresse: "28 rue du poker le Havre 76660",
            prix: "2€",
            inscrits: "8/12",
            note: "4.5 / 5",
            avis: [
                {
                    auteur: "Marilou",
                    avis: "Très bonne partie"
                },
                {
                    auteur: "Antonin",
                    avis: "c'était bien."
                }
            ],
            adresseLien: "https://www.google.com/maps/place/Institut+universitaire+de+technologie+du+Havre/@49.5161141,0.1624614,17z/data=!4m14!1m7!3m6!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!2sInstitut+universitaire+de+technologie+du+Havre!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j!3m5!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"

        },
        {
            Titre: "Conference",
            Image: "/ressources/images/conférence.png",
            date: "20/03",
            description: "Conference sur l'informatique et le développement durable.",
            adresse: "12 rue de l'iut Caucriauville 76620",
            prix: "Gratuit",
            inscrits: "25",
            note: "3.9/5",
            avis: [
                {
                    auteur: "Antoine",
                    avis: "Vraiment pas ouf mais bon"
                }
            ],
            adresseLien: "https://www.google.com/maps/place/Institut+universitaire+de+technologie+du+Havre/@49.5161141,0.1624614,17z/data=!4m14!1m7!3m6!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!2sInstitut+universitaire+de+technologie+du+Havre!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j!3m5!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"

        },
        {
            Titre: "Bozoterie",
            Image: "/ressources/images/comming-soon.jpg",
            date: "25/08",
            description: "On engage des clowns pour faire les singes en publique venez voir le spectacle",
            adresse: "12 boulevard quoi feur 85468",
            prix: "Gratuit",
            inscrits: "42",
            note: "",
            adresseLien: "https://www.google.com/maps/place/Institut+universitaire+de+technologie+du+Havre/@49.5161141,0.1624614,17z/data=!4m14!1m7!3m6!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!2sInstitut+universitaire+de+technologie+du+Havre!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j!3m5!1s0x47e02f019ca4d7e9:0x61d111d0074aa91f!8m2!3d49.5161141!4d0.1624614!16s%2Fg%2F122qxy1j?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"

        },
    ]);

    const [tabElementsNewsletter] = useState([
        {
            Titre: "Le Bde : Au coeur de la vie étudiante",
            text: "Le bde à pour projet de rassembler les étudiants en informatique afin de leur donne l’opportunité de découvrir le reste de la promo tout en faisant des soirées amusantes avec de nombreuses activités.",
        },
        {
            Titre: "Invitation à la soirée d'intégration !",
            text: "Vous l'attendiez depuis longtemps ! Cette soirée d'intégration arrive enfin ! Vous pourrez vous retrouvez tous ensemble le 22 février 2025 pour fêter la nouvelle année tous ensemble ! Toutes les promos sont invitées.",
        },
        {
            Titre: "La conférence du 20/03",
            text: "Il est très important pour tous les étudiants de découvrir des professionnels du métier pour devenir un futur développeur ! Voici pourquoi nous avons organiser une conférence avec des vrais développeurs au sein de l’entreprise dataconcept.",
        },
        {
            Titre: "La quoicoubehatitude du 22/03",
            text: "La quoioubehatitude est un terme énigmatique qui semble tout droit sorti d’un esprit aussi créatif que farfelu.\n" +
                " À première vue, il intrigue par son apparente complexité et l’absence de toute définition officielle. Pourtant, en creusant un peu, on peut y voir un concept riche et plein de profondeur, oscillant entre philosophie de vie et état d’esprit unique.\n" +
                "\n" +
                "Si l’on tente d’analyser le mot en lui-même, on pourrait le décomposer en plusieurs parties : quoi, suggérant une interrogation ou une quête de sens ; ou, indiquant une possibilité ou un choix ; be, renvoyant à l’être ou à l’existence ; et enfin, hatitude, qui évoque à la fois une attitude et peut-être une référence au couvre-chef symbolisant une posture mentale. Ainsi, la quoioubehatitude pourrait être une forme de quête existentielle visant à adopter une attitude spécifique face à la vie, teintée de curiosité et d’ouverture.\n" +
                "\n" +
                "Sur un plan plus pratique, on pourrait assimiler la quoioubehatitude à un mode de pensée décalé, qui pousse à remettre en question les conventions et à explorer les facettes cachées du quotidien. Ceux qui l’adoptent ne se contentent pas des évidences : ils scrutent, réfléchissent et s’interrogent, parfois avec humour, parfois avec sérieux. Elle pourrait être l’incarnation d’un état d’esprit audacieux, où l’on embrasse l’inconnu sans crainte et où l’on cherche constamment à élargir ses horizons.\n" +
                "\n" +
                "En fin de compte, la quoioubehatitude n’a peut-être pas de définition stricte. Elle est ce que chacun en fait : une philosophie, une attitude, une façon de voir le monde autrement. L’adopter, c’est accepter de naviguer entre réflexion et légèreté, sans jamais cesser de questionner l’inattendu.",
        },
    ]);


    useEffect(() => {
        const fetchData = async () => {
            const data = await getEvenementActu();
            console.log(data);
        };

        fetchData();
    }, []);


    const [popUp, setPopUp] = useState(null); // "Events" ou "Newsletter"
    const [selectedElement, setSelectedElement] = useState(null);

    // Quand un élément est sélectionné, afficher la popup
    const showPopUp = (type, element) => {
        setPopUp(type);
        setSelectedElement(element); // On met à jour l'élément sélectionné
    };

    return (
        <>
            <div>
                <Header/>
                <div className="carroussel-container-global">
                    <Carroussel
                        tabElementsEvenement={tabElementsEvenement}
                        positionBtn={"droite"}
                        text="Événements"
                        setSelectedElement={setSelectedElement}
                        setPopUp={(element) => showPopUp("Events", element)} // Passer l'élément à showPopUp
                    />
                    <Carroussel
                        tabElementsEvenement={tabElementsNewsletter}
                        positionBtn={"gauche"}
                        text="Newsletter"
                        setSelectedElement={setSelectedElement}
                        setPopUp={(element) => showPopUp("Newsletter", element)} // Passer l'élément à showPopUp
                    />
                </div>

                <Footer/>
            </div>

            {popUp && selectedElement && (
                <PopUp id={"PopUp"} className={popUp ? "popup-visible" : "cache"} setPopUp={setPopUp}>
                    {popUp === "Events" ? (
                        <>
                            {selectedElement.Image && (
                                <img
                                    className={"popup-image"}
                                    src={selectedElement.Image}
                                    alt={selectedElement.Titre}
                                />
                            )}
                            <p className={"title-text"}>{selectedElement.Titre}</p>
                            <p className={"description-event"}>{selectedElement.description}</p>
                            <p className={"infos-event"}>{"Date : " + selectedElement.date}</p>
                            <p className="infos-event">
                                Adresse : <span className="underline">{selectedElement.adresse}</span>
                            </p>
                            <p className={"infos-event"}>{"Prix de l'inscription : " + selectedElement.prix}</p>
                            <div className={"btn-popup"}>
                                <Bouton texte={"S'inscrire"} image={"/ressources/images/register.png"}
                                        className={"btn-action"} btnWidth={200} btnHeight={60} imageHeight={40}
                                        imageWidth={40}></Bouton>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className={"title-text"}>{selectedElement.Titre}</p>
                            <p className={"description-text"}>{selectedElement.text}</p>
                        </>
                    )}
                </PopUp>
            )}
        </>
    );
}

export default Accueil;
