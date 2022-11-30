import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Footer from './Footer';
import Navigator from './Navigator';

function SavedMovies(props) {
  const [isPopupOpen, setIsPopupOoen] =React.useState(false);
  const [searchFilter, setSearchFilter] = React.useState(true);

  return (
    <div className="page">
      <Header setIsPopupOoen={setIsPopupOoen} />
      <main className="main">
        <SearchForm
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter} />
        <MoviesCardList
          moviesArray={props.myMovies}
          pages={'saved-movies'}
          onDeleteMovie={props.onDeleteMovie}
          searchFilter={searchFilter} />
      </main>
      <Footer />
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'saved-movies'} />
    </div>
  );
}

export default SavedMovies;