import React from 'react';
import logo from '../images/header__logo.svg';

function MainHeader() {
  return (
    <header className="header header_theme_gray">
      <a href="/"><img className="header__logo" src={logo} alt="лого" target="_blank" /></a>
      <div className="header__links">
        <a className="header__link header__link_type_register" href="/signup" target="_blank">Регистрация</a>
        <a className="header__link header__link_type_sign-in" href="/signin" target="_blank">Войти</a>
      </div>
    </header>
  );
}

export default MainHeader;