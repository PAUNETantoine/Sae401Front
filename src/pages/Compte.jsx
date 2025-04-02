import React, {useState} from "react";
import Bouton from "../composants/Bouton";
import Header from "../composants/Header";
import Footer from "../composants/Footer";
import "../styles/pages/Compte.css"

function Compte()
{
    const [compte, setCompte] = useState({
        email: "mao.zedong@gmail.com",
        prenom : "Mao",
        nom: "Zedong",
        motDePasse : "toSkibidiOrNot",
        notifications : true
    });


    return (
        <>
            <Header></Header>
            <div className="compte">
                <div className="compte-header">
                    <img src="/ressources/images/account.png" alt="Account" className="compte-img" />
                    <div className="compte-info">
                        <p>
                            <strong>Prénom : </strong>{compte.prenom}
                            <Bouton image="/ressources/images/edit.png" className="btn-modifier" />
                        </p>
                        <p>
                            <strong>Nom : </strong>{compte.nom}
                            <Bouton image="/ressources/images/edit.png" className="btn-modifier" />
                        </p>
                    </div>
                    <Bouton
                        onClick={() => { compte.notifications = !compte.notifications }}
                        texte={compte.notifications ? "Notifications activées" : "Notifications désactivées"}
                        image={compte.notifications ? "/ressources/images/notifications_fill.png" : "/ressources/images/notifications_pas_fill.png"}
                        imageHeight={30}
                        imageWidth={30}
                        className="btn-action"
                    />
                </div>

                <div className="compte-details">
                    <p><strong>Mail : </strong>{compte.email}</p>
                    <p><strong>Mot de passe : </strong>{compte.motDePasse}</p>
                    <Bouton texte="Changer le mot de passe" className="bouton-souligner" />
                </div>

                <p className="titre-historique-souligner">Historique des commandes :</p>
                <div className="historique-commandes">
                    {/* Historique des commandes ici */}
                </div>
            </div>


            <Footer></Footer>
        </>
    )
}
export default Compte;