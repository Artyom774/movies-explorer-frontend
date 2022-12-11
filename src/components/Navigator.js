import React from 'react';
import { Link } from "react-router-dom";

function Navigator({ isOpen, setIsPopupOoen, page }) {
  const closePopup = () => {
    setIsPopupOoen(false);
  }

  return (
    <div className={`popup ` + (isOpen === true ? `popup_opened` : ``)}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={closePopup}></button>
        <div className="popup__links">
          <Link className="popup__link" to="/">Главная</Link>
          <Link
            className={`popup__link ` + (page === "movies" ? `popup__link_underlined` : ``)}
            to="/movies">Фильмы</Link>
          <Link
            className={`popup__link ` + (page === "saved-movies" ? `popup__link_underlined` : ``)}
            to="saved-movies">Сохранённые фильмы</Link>
        </div>
        <Link className="popup__profile" to="/profile">
          <p className={`popup__profile-text ` + (page === "profile" ? `popup__link_underlined` : ``)}>Аккаунт</p>
          <div className="popup__profile-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Navigator;