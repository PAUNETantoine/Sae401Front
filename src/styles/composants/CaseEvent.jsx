import Bouton from "../../composants/Bouton";

function CaseEvent({element})
{
    return (
        <div className="case-event" style={element.Image ? { backgroundImage: `url(${element.Image})` } : {backgroundImage: `url(/ressources/images/comming-soon.jpg)`}}>
            <p className={"event-title"}>{element.Titre + " " + element.date}</p>
            <div className={"event-footer"}>
                <p className={"event-footer-text"}>{element.avis ? ("Note : " + element.avis) : ("Nombre d'inscrits : " + element.inscrits)}</p>
                <Bouton image={"/ressources/images/pin.png"} imageWidth={20} imageHeight={20}></Bouton>
                <Bouton image={"/ressources/images/register.png"} imageWidth={20} imageHeight={20}></Bouton>
            </div>
        </div>
    )
}

export default CaseEvent;