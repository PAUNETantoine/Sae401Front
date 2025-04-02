import Bouton from "./Bouton";
import "../styles/composants/CaseEvent.css";
import PopUp from "./PopUp";
import React, {useEffect} from "react";

function CaseEvent({ element, id, setInscriptions, estInscrit }) {

    const [popUp, setPopUp] = React.useState(false);

    const handleClickAdresse = () => {
        window.open(element.adresseLien, "_blank");
    }

    useEffect(() => {
        if(popUp) {
            document.getElementById("popUpEvent"+id).classList.remove("cache");
        }else{
            document.getElementById("popUpEvent"+id).classList.add("cache");
        }
    })

    const handleSelectionCase = () => {
        setPopUp(true);
    }

    const handleClosePopUp = () => {
        setPopUp(false);
    }

    const handleSinscrire = () => {
        setInscriptions(element);
        handleClosePopUp();
    }

    console.log(estInscrit)

    return (
        <>
            <div className="case-event" style={element.Image ? { backgroundImage: `url(${element.Image})` } : { backgroundImage: `url(/ressources/images/comming-soon.jpg)` }} onClick={handleSelectionCase}>
                <p className={"event-title"}>{element.Titre + " " + element.date}</p>
                <div className={"event-footer"}>
                    <p className={"event-footer-text"}>{element.note ? ("Note : " + element.note) : ("Nombre d'inscrits : " + element.inscrits)}</p>
                    <div className="boutons">
                        <Bouton
                            image={"/ressources/images/pin.png"}
                            imageWidth={30}
                            imageHeight={30}
                            onClick={handleClickAdresse}>
                        </Bouton>
                        {!element.note && (
                            <Bouton
                                image={(estInscrit ? "/ressources/images/registered.png" : "/ressources/images/register.png")}
                                imageWidth={35}
                                imageHeight={35}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setInscriptions(element);
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
            <PopUp id={"popUpEvent" + id} className={popUp ? "popup-visible" : "cache"} setPopUp={handleClosePopUp}>
                {element.Image && (
                    <img
                        className={"popup-image"}
                        src={element.Image}
                        alt={element.Titre}
                    />
                )}
                <p className={"title-text"}>{element.Titre}</p>
                <p className={"description-event"}>{element.description}</p>
                <p className={"infos-event"}>{"Date : " + element.date}</p>
                <p className="infos-event">
                    Adresse : <span className="underline">{element.adresse}</span>
                </p>
                <p className={"infos-event"}>{"Prix de l'inscription : " + element.prix}</p>
                {element.note && (
                    <>
                        <p className={"infos-event"}>{"Note Moyenne : " + element.note}</p>
                        {element.avis.map((element, index) => (
                            <p className={"description-event"}>{element.auteur + " : " + element.note + "\n" + element.avis}</p>
                        ))}
                        <div className={"btn-popup"}>
                            <Bouton texte={"Donner son avis"} image={"/ressources/images/star.png"} className={"btn-action"} btnWidth={270} btnHeight={60} imageHeight={40} imageWidth={40}></Bouton>
                        </div>
                    </>
                )}
                {!element.note && (
                    <div className={"btn-popup"}>
                        <Bouton
                            texte={(!estInscrit ? "S'inscrire" : "Se désinscrire")}
                            image={(estInscrit ? "/ressources/images/registered.png" : "/ressources/images/register.png")}
                            className={"btn-action"}
                            btnWidth={250} btnHeight={60}
                            imageHeight={40} imageWidth={40}
                            onClick={handleSinscrire}>
                        </Bouton>
                    </div>
                )}
            </PopUp>
        </>
    );
}

export default CaseEvent;