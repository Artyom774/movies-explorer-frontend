import React from 'react';
import MoviesCard from './MoviesCard';
import { moviesApi } from '../utils/MoviesApi';

function MoviesCardList(props) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(()=>{ 
      moviesApi.getMovies()  // загрузка изначальных карточек
      .then((allMovies)=>{
        setMovies(allMovies);
      }).catch(err => console.log(err));
  }, [])

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
        {movies.map((card) => (<MoviesCard
          page={props.page}
          card={card}
          key={card.id} />))}
      </div>
      <button className="movies-card-list__button">{props.page === "movies" ? "Ещё" : ""}</button> 
    </section>
  );
}

export default MoviesCardList;