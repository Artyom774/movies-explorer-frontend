import React from 'react';

function MoviesCard({page, card, onDeleteMovie, onSavedMovie, isLiked}) {
  return (
    <div className="movies-card">
      <img className="movies-card__poster" src={(page === "movies" ? `https://api.nomoreparties.co${card.image.url}` : card.image)} alt="постер" />
      <div className="movies-card__row">
        <p className="movies-card__title">{card.nameRU}</p>
        <button
          className={`movies-card__like ` + (page === "movies" ? `` : `display_none`) + (isLiked && 'movies-card__like_active')}
          onClick={()=>{(!isLiked && onSavedMovie(card))}}></button>
        <button className={`movies-card__delete ` + (page === "movies" ? `display_none` : ``)} onClick={() => onDeleteMovie(card)}></button>
      </div>
      <p className="movies-card__time">{`${card.duration} мин`}</p>
    </div>
  );
}

export default MoviesCard;