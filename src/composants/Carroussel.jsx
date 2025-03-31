import "../styles/composants/Carroussel.css";
import React from "react";


function Carroussel({tabElementsEvenement, tabElementsNewsletter})
{
    const [tabEvent, setTabEvent] = React.useState(tabElementsEvenement);
    const [tabNews, setTabNews] = React.useState(tabElementsNewsletter);


    return(
        <div>
            <h2>Evénements></h2>
            {tabEvent.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p> {/* Affichage du nom de l'objet */}
                </div>
            ))}
            <br></br>
            <h2>Newsletter</h2>
            {tabNews.map((item, index) => (
                <div key={index}>
                    <p>{item.name}</p> {/* Affichage du nom de l'objet */}
                </div>
            ))}
        </div>
    )
}

export default Carroussel;