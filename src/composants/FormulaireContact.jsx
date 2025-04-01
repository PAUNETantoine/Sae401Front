import { useState } from "react";
import Bouton from "./Bouton";
import "../styles/composants/FormulaireContact.css";
import emailjs from "emailjs-com"; // Import EmailJS

function FormulaireContact() {
    const [sujet, setSujet] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêcher le rechargement de la page
        const templateParams = {
            sujet: sujet,
            message: message,
            to_name: "BDE",
            from_name: "Formulaire Contact",
        };

        // Utilisation d'EmailJS pour envoyer l'email
        emailjs
            .send(
                "service_m8xp49n",  // Remplacer par votre Service ID EmailJS
                "template_ilonaor",  // Remplacer par votre Template ID EmailJS
                templateParams,
                "msDmNCZkXw2kEZ3yi" // Remplacer par votre User ID EmailJS
            )
            .then(
                (response) => {
                    console.log("Email envoyé", response);
                    alert("Votre message a été envoyé !");
                },
                (err) => {
                    console.error("Échec de l'envoi", err);
                    alert("Une erreur est survenue. Essayez de nouveau.");
                }
            );
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
