import React from 'react';

function Navigator({isOpen, setIsPopupOoen, page}) {
  function closePopup() {
    setIsPopupOoen(false);
  }

  return (
    <div className={`popup ` + (isOpen === true ? `popup_opened` : ``)}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={closePopup}></button>
        <div className="popup__links">
          <a href="/" className="popup__link">Главная</a>
          <a href="/movies" className={`popup__link ` + (page === "movies" ? `popup__link_underlined` : ``)}>Фильмы</a>
          <a href="saved-movies" className={`popup__link ` + (page === "saved-movies" ? `popup__link_underlined` : ``)}>Сохранённые фильмы</a>
        </div>
        <a className="popup__profile" href="/profile">
          <p className="popup__profile-text">Аккаунт</p>
          <div className="popup__profile-icon" />
        </a>
      </div>
    </div>
  );
}

export default Navigator;