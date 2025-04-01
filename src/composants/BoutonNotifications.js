import Bouton from "./Bouton";
import MenuDeroulant from "./MenuDeroulant";
import "../styles/composants/BoutonNotifications.css"

function BoutonNotifications()
{
    return (
        <div className="boutonNotification-container">
            <span className={"textBoutonNotif"}> Notifications : </span>
            <MenuDeroulant texte1={"Activées"} texte2={"Désactivées"}></MenuDeroulant>
        </div>
    )
}

export default BoutonNotifications;