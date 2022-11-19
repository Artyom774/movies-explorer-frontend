import React from 'react';
/* import Promo from './Promo';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Footer from './Footer'; */
import logo from '../images/header__logo.svg';
import planet from '../images/promo__planet.svg';
import studentPhoto from '../images/student-photo.jpg';

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
          <h2 className="section-title">О проекте</h2>
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
        <section className="techs">
          <h2 className="section-title">Технологии</h2>
          <h3 className="techs__subtitle">7 технологий</h3>
          <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <div className="techs__block">
            <p className="techs__tech-name">HTML</p>
            <p className="techs__tech-name">CSS</p>
            <p className="techs__tech-name">JS</p>
            <p className="techs__tech-name">React</p>
            <p className="techs__tech-name">Git</p>
            <p className="techs__tech-name">Express.js</p>
            <p className="techs__tech-name">mongoDB</p>
          </div>
        </section>
        <section className="about-me">
          <h2 className="section-title">Студент</h2>
          <div className="about-me__flex-container">
            <img className="about-me__photo" src={studentPhoto} alt="фото студента" />
            <div className="about-me__info">
              <h3 className="about-me__name">Артём</h3>
              <p className="about-me__status">Фронтенд-разработчик, 27 лет</p>
              <p className="about-me__description">Программированием начал заниматься ещё в магистратуре, так как тема диссертации была связана 
              с расчётом спектра, что требовало написания отдельной программы. В процессе работы приходилось изучать программирование самостоятельно, 
              что понравилось, так как это даёт свободу действий и подталкивает к самостоятельному развитию. Выбрал именно веб-разработку ввиду 
              наглядности результата и возможности хорошего повсеместного представления, достаточно отправить ссылку на сайт.<br />
              Закончил музыкальную школу и до сих пор играю на пианино. Ещё увлекаюсь космонавтикой и астрономией.</p>
              <a className="about-me__link" href="https://github.com/Artyom774">Github</a>
            </div>
          </div>
        </section>
        <section className="portfolio">
          <h2 className="portfolio__title">Портфолио</h2>
          <a className="portfolio__link" href="https://artyom774.github.io/how-to-learn/how-to-learn.html">
            <p className="portfolio__link-text">Статичный сайт</p>
            <p className="portfolio__link-arrow">↗</p>
          </a>
          <a className="portfolio__link" href="https://artyom774.github.io/russian-travel/russian-travel_lang_ru.html">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <p className="portfolio__link-arrow">↗</p>
          </a>
          <a className="portfolio__link" href="https://artyom774.github.io/react-mesto-auth">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <p className="portfolio__link-arrow">↗</p>
          </a>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум x BeatFilm.</p>
        <div className="footer__down-row">
          <p className="footer__year">&copy; 2022</p>
          <a className="footer__link" href="https://practicum.yandex.ru/web/">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/Artyom774">Github</a>
        </div>
      </footer>
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