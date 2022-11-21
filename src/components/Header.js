import React from 'react';
import logo from '../images/header__logo.svg';

function Header() {
  return (
    <header className="header header_theme_white">
      <a href="/" target="_blank"><img className="header__logo" src={logo} alt="лого" /></a>
      <div className="header__links">
        <a className="header__link header__link_type_movies" href="/movies">Фильмы</a>
        <a className="header__link header__link_type_saved-movies" href="/saved-movies">Сохранённые фильмы</a>
        <a className="header__links" href="/profile">
          <p className="header__link header__link_type_profile">Аккаунт</p>
          <div className="header__profile-link-icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;