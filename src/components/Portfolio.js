import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a className="portfolio__link" href="https://artyom774.github.io/how-to-learn/how-to-learn.html" target="_blank" rel="noreferrer">
        <p className="portfolio__link-text">Статичный сайт</p>
        <p className="portfolio__link-arrow">↗</p>
      </a>
      <a className="portfolio__link" href="https://artyom774.github.io/russian-travel/russian-travel_lang_ru.html" target="_blank" rel="noreferrer">
        <p className="portfolio__link-text">Адаптивный сайт</p>
        <p className="portfolio__link-arrow">↗</p>
      </a>
      <a className="portfolio__link" href="https://artyom774.github.io/react-mesto-auth" target="_blank" rel="noreferrer">
        <p className="portfolio__link-text">Одностраничное приложение</p>
        <p className="portfolio__link-arrow">↗</p>
      </a>
    </section>
  );
}

export default Portfolio;