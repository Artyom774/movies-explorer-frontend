import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
        {props.moviesArray.map((card) => (
          <MoviesCard
            page={props.page}
            card={card}
            key={props.page === "movies" ? card.id : card._id} />))}
      </div>
      <button className="movies-card-list__button">{props.page === "movies" ? "Ещё" : ""}</button> 
    </section>
  );
}

export default MoviesCardList;