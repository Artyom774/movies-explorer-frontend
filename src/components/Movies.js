import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Footer from './Footer';
import Navigator from './Navigator';
import { moviesApi } from '../utils/MoviesApi';

function Movies({ onSavedMovie, onDeleteMovie, allMoviesError, setAllMoviesError }) {
  const [isPopupOpen, setIsPopupOoen] =React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [searchFilter, setSearchFilter] = React.useState(false);
  const [addCardsNumber, setAddCardsNumber] = React.useState(0);

  function searchMovies(word) {
    setAddCardsNumber(0);
    moviesApi.getMovies()  // загрузка всех фильмов с сервиса
      .then((allMovies)=>{
        setAllMoviesError(false);
        setTitle(word);
        setAllMovies(allMovies);
      })
      .catch((err) => {
        setAllMoviesError(true);
        console.log(err);
      });
  }

  React.useState(()=>{
    const savedFilter = localStorage.getItem('searchingFilter');
    if (savedFilter === 'true') {
      setSearchFilter(true);
    }
  }, [])

  return (
    <div className="page">
      <Header setIsPopupOoen={setIsPopupOoen} />
      <main className="main">
        <SearchForm
          searchMovies={searchMovies}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          page={'movies'} />
        <MoviesCardList
          page={'movies'}
          moviesArray={allMovies}
          onSavedMovie={onSavedMovie}
          title={title}
          onDeleteMovie={onDeleteMovie}
          searchFilter={searchFilter}
          addCardsNumber={addCardsNumber}
          setAddCardsNumber={setAddCardsNumber}
          moviesError={allMoviesError} />
      </main>
      <Footer />
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'movies'} />
    </div>
  );
}

export default Movies;