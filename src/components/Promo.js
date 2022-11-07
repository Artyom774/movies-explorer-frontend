import React from 'react';
import logo from '../images/header__logo.svg';

function Promo() {
  return (
    <header className="promo">
      <img className="header__logo" src={logo} alt="лого" />
    </header>
  );
}

export default Promo;