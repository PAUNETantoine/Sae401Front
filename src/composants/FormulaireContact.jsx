import { useState } from "react";
import Bouton from "./Bouton";
import "../styles/composants/FormulaireContact.css";

function FormulaireContact() {
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        alert(`Sujet : ${sujet}\nMessage : ${message}`);
    };

    return (
        <div className="formulaire-contact">
            <div className="header-contact">
                <p>Nous contacter</p>
                <Bouton
                    texte="Envoyer"
                    image="/ressources/images/icone_send.png"
                    className="btn-envoyer"
                    imageWidth={30}
                    onClick={handleSubmit}
                />
            </div>

            <input
                type="text"
                placeholder="Sujet"
                className="input-sujet"
                value={sujet}
                onChange={(e) => setSujet(e.target.value)}
            />

            <textarea
                placeholder="Votre message..."
                className="textarea-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
        </div>
    );
}

export default FormulaireContact;
