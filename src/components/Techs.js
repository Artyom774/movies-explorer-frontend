import React from 'react';

function Techs() {
  return (
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
  );
}

export default Techs;