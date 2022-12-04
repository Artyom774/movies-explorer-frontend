import React from 'react';
import logo from '../images/header__logo.svg';
import { Link } from "react-router-dom";

function Header({ setIsPopupOoen }) {
  function openPopup() {
    setIsPopupOoen(true);
  }

  return (
    <header className="header header_theme_white">
      <Link to="/"><img className="header__logo" src={logo} alt="лого" /></Link>
      <div className="header__links">
        <Link className="header__link header__link_type_movies" to="/movies">Фильмы</Link>
        <Link className="header__link header__link_type_saved-movies" to="/saved-movies">Сохранённые фильмы</Link>
        <Link className="header__links" to="/profile">
          <p className="header__link header__link_type_profile">Аккаунт</p>
          <div className="header__profile-link-icon" />
        </Link>
      </div>
      <button type="button" className="header__navigator-button" onClick={openPopup}></button>
    </header>
  );
}

export default Header;