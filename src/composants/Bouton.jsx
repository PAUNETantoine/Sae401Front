import "/src/styles/composants/Bouton.css";

function Bouton({ texte, onClick, className = "" }) {
    return (
        <button className={`bouton ${className}`} onClick={onClick}>
            {texte}
        </button>
    );
}

export default Bouton;
