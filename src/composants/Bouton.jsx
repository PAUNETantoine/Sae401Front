import "../styles/composants/Bouton.css";

function Bouton({ texte, onClick, className, image, widthBtn, heightBtn }) {
    return (
        <div className={`bouton ${className}`} onClick={onClick} height={heightBtn} width={widthBtn}>
            {texte && <p>{texte}</p>}
            {image && <img src={image} alt={texte} height={heightBtn} width={widthBtn} />}
        </div>
    );
}

export default Bouton;
