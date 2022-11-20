import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум x BeatFilm.</p>
      <div className="footer__down-row">
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/web/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/Artyom774" target="_blank" rel="noreferrer">Github</a>
        </div>
        <p className="footer__year">&copy; 2022</p>
      </div>
    </footer>
  );
}

export default Footer;