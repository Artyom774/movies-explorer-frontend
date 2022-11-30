import React from 'react';
import logo from '../images/header__logo.svg';

function MainHeader({loggedIn}) {
  return (
    <header className="header header_theme_gray">
      <a href="/"><img className="header__logo" src={logo} alt="лого" /></a>
      {loggedIn ?
        <div className="header__links">
          <a className="header__link header__link_type_movies" href="/movies">Фильмы</a>
          <a className="header__link header__link_type_saved-movies" href="/saved-movies">Сохранённые фильмы</a>
          <a className="header__links" href="/profile">
            <p className="header__link header__link_type_profile">Аккаунт</p>
            <div className="header__profile-link-icon" />
          </a>
        </div> :
        <div className="header__links">
          <a className="header__link header__link_type_register" href="/signup">Регистрация</a>
          <a className="header__link header__link_type_sign-in" href="/signin">Войти</a>
        </div>
      }
    </header>
  );
}

export default MainHeader;