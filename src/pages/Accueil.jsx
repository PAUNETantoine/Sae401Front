import "../styles/pages/Accueil.css";
import Navbar from "../composants/Navbar";
import Carroussel from "../composants/Carroussel";


function Accueil()
{
    const [tabElementsEvenement, setTabElementsEvenement] = React.useState([
        {
            Titre: "LaserGame 25/04",

        }
    ])





    return (
        <div>
            <Navbar></Navbar>
            <Carroussel tabElementsEvenement={}></Carroussel>
        </div>
    );
}


export default Accueil;