import React from "react";

function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="photo-grid__item">
            <button className="photo-grid__delete-button" />
            <img src={card.link} alt={card.name} className="photo-grid__pic" onClick={handleClick} />
            <div className="photo-grid__title-container">
                <h2 className="photo-grid__title">{card.name}</h2>
                <div className="photo-grid__like-container">
                    <p className="photo-grid__like-number">{card.likes.length}</p>
                    <button className="photo-grid__like" />
                </div>
            </div>
        </li>
    );
}

export default Card;
