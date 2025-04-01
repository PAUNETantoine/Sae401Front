import Header from "../composants/Header";
import Footer from "../composants/Footer";
import CaseEvent from "../styles/composants/CaseEvent";
import {useState} from "react";

function Evenements()
{
    const [tabElementsEvenement, setTabElementsEvenement] = useState([
        {
            Titre: "Laser Game",
            Image: "/ressources/images/laserGame.webp",
            date: "25/04",
            description: "Laser Game au Havre en équipes de 8.",
            adresse : "8 rue du laser game le Havre 76600",
            prix : "15€",
            inscrits : "10/25",
            avis : ""
        },
        {
            Titre: "Poker",
            Image: "/ressources/images/poker.jpg",
            date: "20/04",
            description: "Parties de poker avec cash price pour les gagnants.",
            adresse : "28 rue du poker le Havre 76660",
            prix : "2€",
            inscrits : "8/12",
            avis : "4.5 / 5"
        },
        {
            Titre: "Conference",
            Image: "/ressources/images/conférence.png",
            date: "20/03",
            description: "Conference sur l'informatique et le développement durable.",
            adresse: "12 rue de l'iut Caucriauville 76620",
            prix : "Gratuit",
            inscrits : "25",
            avis : "3.9/5"
        },
        {
            Titre: "Bozoterie",
            Image: "/ressources/images/comming-soon.jpg",
            date: "25/08",
            description: "On engage des clowns pour faire les singes en publique venez voir le spectacle",
            adresse: "12 boulevard quoi feur 85468",
            prix : "Gratuit",
            inscrits : "42",
            avis : ""
        },
    ]);


    return(
        <div>
            <Header></Header>
            <CaseEvent element={tabElementsEvenement[0]}></CaseEvent>
            <Footer></Footer>
        </div>
    )
}

export default Evenements;