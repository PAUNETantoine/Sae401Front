import React, {useEffect, useState} from "react";
import Bouton from "../composants/Bouton";
import Header from "../composants/Header";
import Footer from "../composants/Footer";
import "../styles/pages/Compte.css"
import {getInfosCompte} from "../scripts/ConnexionCompte";

function Compte()
{
    const [compte, setCompte] = useState({
        email: "mao.zedong@gmail.com",
        prenom : "Mao",
        nom: "Zedong",
        motDePasse : "toSkibidiOrNot",
        notifications : true
    });


    useEffect(() => {
        const fetchData = async () => {
            const data = await getInfosCompte();
            console.log(data);
        };

        fetchData();
    }, []);


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
                    <p><strong>Mail : </strong> {compte.email}</p>
                    <Bouton texte="Changer le mot de passe" className="bouton-souligner" />
                </div>

                <p className="titre-historique-souligner">Historique des commandes :</p>
                <div className="historique-commandes">
                    <div className={"commande"}>
                        <strong>Commande numéro 112 : </strong>
                        <p>> Sweat Blanc : 2 </p>
                        <p>> Sweat noir : 1 </p>
                        <p>> Casquette BDE : 2 </p>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    )
}
export default Compte;