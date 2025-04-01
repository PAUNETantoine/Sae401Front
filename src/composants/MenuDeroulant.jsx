import { useEffect, useState } from "react";
import "../styles/composants/MenuDeroulant.css";

function MenuDeroulant({ texte1, texte2 }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedText, setSelectedText] = useState(texte1 + " ▼"); // État pour le texte du bouton

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Fonction pour sélectionner un élément et fermer le menu
    const handleSelect = (text) => {
        setSelectedText(text + " ▼"); // Mettre à jour le texte du bouton
        setIsOpen(false); // Fermer le menu
    };

    // Fermer le menu si on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-container")) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="dropdown-container">
            <button className="dropdown-btn" onClick={toggleMenu}>
                {selectedText}
            </button>
            {isOpen && (
                <ul className="dropdown-list">
                    <li className="dropdown-item" onClick={() => handleSelect(texte1)}>{texte1}</li>
                    <li className="dropdown-item" onClick={() => handleSelect(texte2)}>{texte2}</li>
                </ul>
            )}
        </div>
    );
}

export default MenuDeroulant;
