import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/Api";

function Main(props) {
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");

    useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    return (
        <main className="content">
            <section className="profile root__profile">
                <div className="profile__info-container">
                    <div className="profile__avatar-container">
                        <img src={`${userAvatar}`} alt="Аватар" className="profile__avatar" />
                        <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <ul className="photo-grid root__photo-grid">
                {props.cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                ))}
            </ul>
        </main>
    );
}

export default Main;