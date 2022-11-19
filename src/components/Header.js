import React from 'react';
import logo from '../images/header__logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого" />
      <div className="header__links">
        <a className="header__link" href="#">Регистрация</a>
        <a className="header__link header__link_type_sign-in" href="#">Войти</a>
      </div>
    </header>
  );
}

export default Header;