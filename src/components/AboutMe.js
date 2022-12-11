import React from 'react';
import studentPhoto from '../images/student-photo.jpg';

const AboutMe = () => {
  return (
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
          <a className="about-me__link" href="https://github.com/Artyom774" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;