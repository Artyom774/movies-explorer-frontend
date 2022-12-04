import React from 'react';
import { Link } from "react-router-dom";

function Navigator({ isOpen, setIsPopupOoen, page }) {
  function closePopup() {
    setIsPopupOoen(false);
  }

  return (
    <div className={`popup ` + (isOpen === true ? `popup_opened` : ``)}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={closePopup}></button>
        <div className="popup__links">
          <Link to="/" className="popup__link">Главная</Link>
          <Link to="/movies" className={`popup__link ` + (page === "movies" ? `popup__link_underlined` : ``)}>Фильмы</Link>
          <Link to="saved-movies" className={`popup__link ` + (page === "saved-movies" ? `popup__link_underlined` : ``)}>Сохранённые фильмы</Link>
        </div>
        <Link className="popup__profile" to="/profile">
          <p className="popup__profile-text">Аккаунт</p>
          <div className="popup__profile-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Navigator;