import { useState } from "react";
import { Link } from "react-router-dom"; // Import de Link pour la navigation
import Bouton from "./Bouton";
import "../styles/composants/FormulaireConnexion.css";

function FormulaireConnexion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nMot de passe: ${password}`);
    };

    return (
        <div className="formulaire-connexion">
            <p className="text-connexion">Connexion</p>

            <form onSubmit={handleSubmit} className="form">
                <input
                    type="email"
                    placeholder="Email"
                    className="input-champ"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    className="input-champ"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Bouton texte="Se connecter" className="btn-action" />
            </form>

            <p className="inscription-link">
                Pas de compte ? <Link to="/inscription">En créer un.</Link>
            </p>
        </div>
    );
}

export default FormulaireConnexion;
