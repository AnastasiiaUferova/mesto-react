import React from "react";
import "../index.css";

function ImagePopup({ card, name, onClose }) {
    return (
        <section className={card ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}>
            <div className="popup__container popup__container_type_pic">
                <button className="popup__close-button popup__close-button_type_pic" type="button" onClick={onClose}></button>
                <img src={card.link} alt="." className="popup__pic" />
                <h3 className="popup__subtitle">{card.name}</h3>
            </div>
        </section>
    );
}

export default ImagePopup;