import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Footer from './Footer';
import Navigator from './Navigator';
import { moviesApi } from '../utils/MoviesApi';

function Movies(props) {
  const [isPopupOpen, setIsPopupOoen] =React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [title, setTitle] = React.useState('');

  function searchMovies(word, searchFilter) {
    moviesApi.getMovies()  // загрузка всех фильмов с сервиса
      .then((allMovies)=>{
        setTitle(word);
        setAllMovies(allMovies);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="page">
      <Header setIsPopupOoen={setIsPopupOoen} />
      <main className="main">
        <SearchForm
          searchMovies={searchMovies} />
        <MoviesCardList
          page={'movies'}
          moviesArray={allMovies}
          onSavedMovie={props.onSavedMovie}
          title={title}
          myMovies={props.myMovies} />
      </main>
      <Footer />
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'movies'} />
    </div>
  );
}

export default Movies;