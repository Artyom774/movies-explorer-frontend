import React from 'react';
import MoviesCard from './MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
        {(props.page === 'movies' ? 
          props.moviesArray.map((card) => (
            card.nameRU.includes(props.title) && (!props.searchFilter || card.duration <= 40) &&
            <MoviesCard
              page={props.page}
              card={card}
              key={props.page === "movies" ? card.id : card._id}
              onDeleteMovie={props.onDeleteMovie}
              onSavedMovie={props.onSavedMovie}
              isLiked={props.myMovies.some((myCard)=>{return myCard.movieId === card.id})}
              myCardId={props.myMovies.find((myCard)=> myCard.movieId === card.id)} />)) :
          props.moviesArray.map((card) => (
            (props.title === '' || card.nameRU.includes(props.title)) && (!props.searchFilter || card.duration <= 40) &&
              <MoviesCard
                page={props.page}
                card={card}
                key={props.page === "movies" ? card.id : card._id}
                onDeleteMovie={props.onDeleteMovie}
                onSavedMovie={props.onSavedMovie} />)))}
      </div>
      <button className="movies-card-list__button">{props.page === "movies" ? "Ещё" : ""}</button> 
    </section>
  );
}

export default MoviesCardList;