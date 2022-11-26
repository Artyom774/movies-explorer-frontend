import React from 'react';
import filmPoster from '../images/film-poster.jpg';

function MoviesCard(props) {
  return (
    <div className="movies-card">
      <img className="movies-card__poster" src={filmPoster} alt="постер" />
      <div className="movies-card__row">
        <p className="movies-card__title">33 слова о дизайне</p>
        <button className={`movies-card__like ` + (props.page === "movies" ? `` : `display_none`)}></button>
        <button className={`movies-card__delete ` + (props.page === "movies" ? `display_none` : ``)}></button>
      </div>
      <p className="movies-card__time">1ч 47мин</p>
    </div>
  );
}

export default MoviesCard;