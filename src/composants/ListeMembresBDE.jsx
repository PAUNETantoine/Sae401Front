import "../styles/composants/ListeMembresBDE.css";

function ListeMembresBDE() {
    const membres = [
        "Baptiste Hay",
        "Titouan Bertaux",
        "Hugo Vicente",
        "Aubin Montagne",
        "Yanis Yachir",
        "Mohamed-Bilel Chriki",
        "Evan Cnaepelnickx"
    ];

    return (
        <div className="liste-membres-bde">
            <p className="titre">Les membres du BDE</p>
            <div className="contenu-liste">
                <ul className="colonne">
                    {membres.slice(0, membres.length / 2).map((nom, index) => (
                        <li key={index}>{nom}</li>
                    ))}
                </ul>
                <ul className="colonne">
                    {membres.slice(membres.length / 2).map((nom, index) => (
                        <li key={index}>{nom}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListeMembresBDE;
