import "../styles/composants/FormulaireContact.css";
import Bouton from "./Bouton";

function FormulaireContact()
{
    return (
        <div className="FormulaireContact">
            <p>Nous contacter</p>

            <Bouton
                texte={"Envoyer"}
                image={"/ressources/images/icone_send.png"}
                className={"btn-envoyer"}
                imageWidth={30} />
        </div>
    );
}

export default FormulaireContact;
