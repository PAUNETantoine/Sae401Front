import "../styles/composants/Bouton.css";

function Bouton({ texte, onClick, className, image, btnWidth, btnHeight, imageWidth, imageHeight }) {
    return (
        <div>
            <button
            className={className}
            onClick={onClick}
            style={{
                width: `${btnWidth}px`,
                height: `${btnHeight}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }}
            >
            {texte && <p style={{ fontSize: "1em", marginRight: image ? '10px' : '0' }}>{texte}</p>}

            {image &&
                <img
                    src={image}
                    alt={texte}
                    style={{
                        width: `${imageWidth}px` || 'auto',
                        height: `${imageHeight}px` || 'auto',
                    }}
                />
            }
            </button>
        </div>
    );
}

export default Bouton;
