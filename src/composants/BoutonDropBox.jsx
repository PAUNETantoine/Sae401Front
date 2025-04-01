import Bouton from "./Bouton";
import MenuDeroulant from "./MenuDeroulant";
import "../styles/composants/BoutonDropBox.css"

function BoutonDropBox({titre, texte1, texte2})
{
    return (
        <div className="boutonNotification-container">
            <span className={"textBoutonNotif"}> {titre} : </span>
            <MenuDeroulant texte1={texte1} texte2={texte2}></MenuDeroulant>
        </div>
    )
}

export default BoutonDropBox;