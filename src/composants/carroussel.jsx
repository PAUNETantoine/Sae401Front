function carroussel({tabElementsEvenement, tabElementsNewsletter})
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
        </div>
    )
}

export default carroussel;