import { useState } from "react";
import Bouton from "./Bouton";
import "../styles/composants/FormulaireInscription.css";

function FormulaireInscription() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }

        alert(`Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nMot de passe: ${password}`);
    };

    return (
        <div className="formulaire-inscription">
            <p className="text-inscription">Créer un compte</p>

            <form onSubmit={handleSubmit} className="form">
                {/* Champs Nom et Prénom sur la même ligne */}
                <div className="split-container">
                    <input
                        type="text"
                        placeholder="Nom"
                        className="input-champ input-nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Prénom"
                        className="input-champ input-prenom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                    />
                </div>

                <input
                    type="email"
                    placeholder="Email"
                    className="input-champ"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <div className="split-container">
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        className="input-champ"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Confirmer le mot de passe"
                        className="input-champ"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <Bouton texte="S'inscrire" className="btn-inscription" />
            </form>
        </div>
    );
}

export default FormulaireInscription;
