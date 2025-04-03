import {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom"; // Import de Link pour la navigation
import Bouton from "./Bouton";
import "../styles/composants/FormulaireConnexion.css";
import {getInfosCompte} from "../scripts/ConnexionCompte";

function FormulaireConnexion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nMot de passe: ${password}`);
        navigate("/compte");
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await envoyerConnexion({email: email, password: password});
            console.log(data);
        };

        fetchData();
    }, []);

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

                <Bouton texte="Se connecter" className="btn-action"/>
            </form>

            <p className="inscription-link">
                Pas de compte ? <Link to="/inscription">En créer un.</Link>
            </p>
        </div>
    );
}

export default FormulaireConnexion;
