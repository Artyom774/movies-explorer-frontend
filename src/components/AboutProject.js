import React from 'react';

const AboutProject = () => {
  return (
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
  );
}

export default AboutProject;