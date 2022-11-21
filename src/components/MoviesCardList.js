import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button className="movies-card-list__button">Ещё</button> 
    </section>
  );
}

export default MoviesCardList;