import React from 'react';
import Promo from './Promo';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Footer from './Footer';
import logo from '../images/header__logo.svg';
import planet from '../images/promo__planet.svg';

function Main() {
  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src={logo} alt="лого" />
        <div className="header__links">
          <a className="header__link" href="#">Регистрация</a>
          <a className="header__link header__link_type_sign-in" href="#">Войти</a>
        </div>
      </header>
      <main className="main">
        <section className="promo">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="promo__link" href="#about-project">Узнать больше</a>
          <img className="promo__image" src={planet} alt="веб-мир" />
        </section>
        <section className="about-project" id="about-project">

        </section>




      </main>
    </div>
  );
}

export default Main;

/*
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
*/