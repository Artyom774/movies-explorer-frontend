import React from 'react';
import logo from '../images/header__logo.svg';
import { Link } from "react-router-dom";

function MainHeader({loggedIn}) {
  return (
    <header className="header header_theme_gray">
      <Link to="/"><img className="header__logo" src={logo} alt="лого" /></Link>
      {loggedIn ?
        <div className="header__links">
          <Link to='/movies' className="header__link header__link_type_movies display_inline">Фильмы</Link>
          <Link className="header__link header__link_type_saved-movies display_inline" to="/saved-movies">Сохранённые фильмы</Link>
          <Link className="header__links" to="/profile">
            <p className="header__link header__link_type_profile display_inline">Аккаунт</p>
            <div className="header__profile-link-icon display_inline" />
          </Link>
        </div> :
        <div className="header__links">
          <Link className="header__link header__link_type_register" to="/signup">Регистрация</Link>
          <Link className="header__link header__link_type_sign-in" to="/signin">Войти</Link>
        </div>
      }
    </header>
  );
}

export default MainHeader;