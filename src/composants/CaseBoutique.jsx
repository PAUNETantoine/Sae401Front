import Bouton from "./Bouton";
import React from "react";

function CaseEvent ({element})
{
    return (
        <>
            <div className="case-event" style={element.Image ? { backgroundImage: `url(${element.Image})` } : { backgroundImage: `url(/ressources/images/comming-soon.jpg)` }} onClick={handleSelectionCase}>
                <p className={"event-title"}>{element.Titre + " " + element.date}</p>
                <div className={"event-footer"}>
                    <p className={"event-footer-text"}>{element.note ? ("Note : " + element.note) : ("Nombre d'inscrits : " + element.inscrits)}</p>
                    <div className="boutons">
                        <Bouton image={"/ressources/images/pin.png"} imageWidth={35} imageHeight={35} onClick={handleClickAdresse}></Bouton>
                        {!element.note && (
                            <Bouton image={(estInscrit ? "/ressources/images/registered.png" : "/ressources/images/register.png")} imageWidth={35} imageHeight={35} onClick={() => setInscriptions(element)}></Bouton>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseEvent;