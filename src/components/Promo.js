import React from 'react';
import planet from '../images/promo__planet.svg';

const Promo = () => {
  return (
    <section className="promo">
      <img className="promo__image" src={planet} alt="веб-мир" />
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className="promo__link" href="#about-project">Узнать больше</a>
      </div>
    </section>
  );
}

export default Promo;