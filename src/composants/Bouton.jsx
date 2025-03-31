import "../styles/composants/Bouton.css";

function Bouton({ texte, onClick, className, image, widthBtn, heightBtn }) {
    return (
        <div
            className={`bouton ${className}`}
            onClick={onClick}
            style={{ width: widthBtn, height: heightBtn }}
        >
            {texte && <p style={{ fontSize: "1em" }}>{texte}</p>}
            {image && <img src={image} alt={texte} style={{ width: "100%", height: "100%" }} />}
        </div>
    );
}

export default Bouton;
