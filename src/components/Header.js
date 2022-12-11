import React from 'react';
import logo from '../images/header__logo.svg';
import { Link } from "react-router-dom";

function Header({ setIsPopupOoen, page }) {

  const openPopup = () => {
    setIsPopupOoen(true);
  }

  return (
    <header className="header header_theme_white">
      <Link to="/"><img className="header__logo" src={logo} alt="лого" /></Link>
      <div className="header__links">
        <Link
          className={`header__link header__link_type_movies ` + (page === 'movies' ? `font-weight_medium` : ``)}
          to="/movies">Фильмы</Link>
        <Link
          className={`header__link header__link_type_saved-movies ` + (page === 'saved-movies' ? `font-weight_medium` : ``)}
          to="/saved-movies">Сохранённые фильмы</Link>
        <Link className="header__links" to="/profile">
          <p className={`header__link header__link_type_profile ` + (page === 'profile' ? `font-weight_medium` : ``)}>Аккаунт</p>
          <div className="header__profile-link-icon" />
        </Link>
      </div>
      <button type="button" className="header__navigator-button" onClick={openPopup}></button>
    </header>
  );
}

export default Header;