const enableValidation = {
    formSelector: ".popup__form-info",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_inactive",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__error_active",
};

//popup-pic

const popupPicElement = document.querySelector(".popup_type_pic");
const popupPicSubtitle = document.querySelector(".popup__subtitle");
const popupPic = ".popup__pic";
const popupEditElement = document.querySelector(".popup_type_edit");
const picCloseButton = ".popup__close-button_type_pic";

// popup-new-card
const popupCardElement = document.querySelector(".popup_type_new-card");
const popupAvatar = document.querySelector(".popup_type_edit-avatar");

//forms

const formEditElement = popupEditElement.querySelector(".popup__form-info_type_edit");
const formCardElement = popupCardElement.querySelector(".popup__form-info_type_new-card");
const avatarEditForm = popupAvatar.querySelector(".popup__form-info_type_edit")

//inputs

const placeNameInput = popupCardElement.querySelector(".popup__input_type_placename");
const placeUrlInput = popupCardElement.querySelector(".popup__input_type_url");

const photoForm = document.querySelector(".popup__form-info_type_new-card");

//popups: close-buttons
const closeEditPopupButtonElement = popupEditElement.querySelector(".popup__close-button_type_edit");
const closeCardPopupButtonElement = popupCardElement.querySelector(".popup__close-button_type_new-card");

// popups: open-buttons

const openEditPopupButtonElement = document.querySelector(".profile__edit-button");
const openCardPopupButtonElement = document.querySelector(".profile__add-button");

//profile
const profileElement = document.querySelector(".profile");
const profileNameElement = ".profile__name";
const profileDescriptionElement = ".profile__subtitle";
const profileAvatarElement = ".profile__avatar";

//selector

export const cardListSelector = ".photo-grid";
const popupPicSelector = ".popup_type_pic";
const popupFormPicSelector = ".popup__form-info_type_add";
const cardSelector = ".template";
const likeButtonSelector = ".photo-grid__like";
const likeActiveButtonClass = "photo-grid__like_active";
const deleteButtonSelector = ".photo-grid__delete-button";
const deletePopupSelector = ".popup_type_confirm"

export {
    deleteButtonSelector,
    likeActiveButtonClass,
    likeButtonSelector,
    cardSelector,
    popupFormPicSelector,
    popupPicSelector,
    picCloseButton,
    placeUrlInput,
    placeNameInput,
    enableValidation,
    popupPicElement,
    popupPicSubtitle,
    popupPic,
    formEditElement,
    formCardElement,
    popupEditElement,
    popupCardElement,
    profileNameElement,
    profileDescriptionElement,
    profileAvatarElement,
    deletePopupSelector,
    popupAvatar,
    avatarEditForm
};


