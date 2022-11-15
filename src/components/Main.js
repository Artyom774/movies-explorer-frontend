import React from 'react';
/* import Promo from './Promo';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Footer from './Footer'; */
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
          <img className="promo__image" src={planet} alt="веб-мир" />
          <div className="promo__container">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <a className="promo__link" href="#about-project">Узнать больше</a>
          </div>
        </section>
        <section className="about-project" id="about-project">
          <h2 className="about-project__title">О проекте</h2>
          <div className="about-project__info-blog">
            <div className="about-project__info-container">
              <p className="about-project__container-caption">Дипломный проект включал 5 этапов</p>
              <p className="about-project__container-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="about-project__info-container">
              <p className="about-project__container-caption">На выполнение диплома ушло 5 недель</p>
              <p className="about-project__container-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
          </div>
          <div className="about-project__time-blog">
            <div className="about-project__time-container about-project__time-container_size_20-percent">
              <p className="about-project__time-line about-project__time-line_theme_blue">1 неделя</p>
              <p className="about-project__time-sign">Back-end</p>
            </div>
            <div className="about-project__time-container about-project__time-container_size_80-percent">
              <p className="about-project__time-line">4 недели</p>
              <p className="about-project__time-sign">Front-end</p>
            </div>
          </div>
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