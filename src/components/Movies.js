import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Footer from './Footer';
import Navigator from './Navigator';

function Movies(props) {
  const [isPopupOpen, setIsPopupOoen] =React.useState(false);

  return (
    <div className="page">
      <Header setIsPopupOoen={setIsPopupOoen} />
      <main className="main">
        <SearchForm />
        <MoviesCardList
          page={'movies'}
          moviesArray={props.allMovies}
          onSavedMovie={props.onSavedMovie} />
      </main>
      <Footer />
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'movies'} />
    </div>
  );
}

export default Movies;