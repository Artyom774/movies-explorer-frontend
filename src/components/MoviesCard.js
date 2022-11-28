import React from 'react';

function MoviesCard({page, card}) {
  return (
    <div className="movies-card">
      <img className="movies-card__poster" src={`https://api.nomoreparties.co${card.image.url}`} alt="постер" />
      <div className="movies-card__row">
        <p className="movies-card__title">{card.nameRU}</p>
        <button className={`movies-card__like ` + (page === "movies" ? `` : `display_none`)}></button>
        <button className={`movies-card__delete ` + (page === "movies" ? `display_none` : ``)}></button>
      </div>
      <p className="movies-card__time">{`${card.duration} мин`}</p>
    </div>
  );
}

export default MoviesCard;