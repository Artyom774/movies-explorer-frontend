import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
      </div>
      <button className="movies-card-list__button">{props.page === "movies" ? "Ещё" : ""}</button> 
    </section>
  );
}

export default MoviesCardList;