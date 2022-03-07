import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState} from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
    }


    const [selectedCard, setSelectedCard] = useState({});

    function handleCardClick(data) {
        setSelectedCard({ name: data.name, link: data.link });
        setIsImagePopupOpen(true);
    }

    return (
        <div className="root">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
            <Footer />
            <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input id="username-input" type="text" name="name" defaultValue="Жак-Ив Кусто" className="popup__input popup__input_type_name" minLength="{2}" maxLength="{40}" required />
                <span className="popup__error username-input-error">Error</span>
                <input id="description-input" type="text" name="about" defaultValue="Исследователь океана" className="popup__input popup__input_type_job" minLength="{2}" maxLength="{200}" required />
                <span className="popup__error description-input-error">Error</span>
            </PopupWithForm>

            <PopupWithForm name="new-card" title="Новое место" submitText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input id="placename-input" type="text" name="name" className="popup__input popup__input_type_placename" placeholder="Название" minLength="{2}" maxLength="{30}" required />
                <span className="popup__error placename-input-error">Error</span>
                <input id="link-input" type="url" name="link" className="popup__input popup__input_type_url" placeholder="Ссылка на картинку" required />
                <span className="popup__error link-input-error">Error</span>
            </PopupWithForm>
            <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input id="avatar-input" type="url" name="avatar" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" required />
                <span className="popup__error avatar-input-error">Error</span>
            </PopupWithForm>
            <PopupWithForm name="confirm" title="Вы уверены?" submitText="Да" onClose={closeAllPopups}></PopupWithForm>

            <ImagePopup name="pic" card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
        </div>
    );
}

export default App;
