import React from 'react' 
import "../index.css"

function PopupWithForm({name, isOpen, onClose, title, submitText, children }) { 
    return (
        <section className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`} >
         <section className="popup__container popup__container_type_form">
           <button
             className="popup__close-button popup__close-button_type_edit"
             type="button"
             onClick={onClose}
           ></button>
           <h2 className="popup__title">{`${title}`}</h2>
           <form
             name={`${name}`}
             className="popup__form-info"
           >
             {children}
             <button className="popup__save-button" type="submit">{submitText}</button>
           </form>
           
         </section>
        </section>
        
        )
}

export default PopupWithForm




