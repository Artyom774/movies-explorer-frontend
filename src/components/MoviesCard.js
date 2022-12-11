import React from 'react';

const MoviesCard = ({ page, card, onDeleteMovie, onSavedMovie, isLiked, myCardId }) => {
  return (
    <div className="movies-card">
      <a className="movies-card__link" href={card.trailerLink} target="_blank"  rel="noreferrer">
        <img className="movies-card__poster" src={(page === "movies" ? `https://api.nomoreparties.co${card.image.url}` : card.image)} alt="постер" />
      </a>
      <div className="movies-card__row">
        <p className="movies-card__title">{card.nameRU}</p>
        <button
          className={`movies-card__like ` + (page === "movies" ? `` : `display_none `) + (isLiked && ' movies-card__like_active')}
          onClick={()=>{(isLiked ? onDeleteMovie(myCardId._id) : onSavedMovie(card))}}></button>
        <button className={`movies-card__delete ` + (page === "movies" ? `display_none` : ``)} onClick={() => onDeleteMovie(card._id)}></button>
      </div>
      <p className="movies-card__time">{`${card.duration} мин`}</p>
    </div>
  );
}

export default MoviesCard;