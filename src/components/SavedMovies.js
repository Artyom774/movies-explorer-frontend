import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Footer from './Footer';
import Navigator from './Navigator';

const SavedMovies = ({ onDeleteMovie, savedMoviesError, showPreloader }) => {
  const [isPopupOpen, setIsPopupOoen] =React.useState(false);
  const [searchFilter, setSearchFilter] = React.useState(false);  
  const [title, setTitle] = React.useState('');
  const [addCardsNumber, setAddCardsNumber] = React.useState(0);

  const searchMovies = (word) => {
    setAddCardsNumber(0);
    setTitle(word);
  }

  return (
    <div className="page">
      <Header
        setIsPopupOoen={setIsPopupOoen}
        page={'saved-movies'} />
      <main className="main">
        <SearchForm
          searchMovies={searchMovies}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          page={'saved-movies'} />
        <MoviesCardList
          page={'saved-movies'}
          onDeleteMovie={onDeleteMovie}
          searchFilter={searchFilter}
          title={title}
          addCardsNumber={addCardsNumber}
          setAddCardsNumber={setAddCardsNumber}
          moviesError={savedMoviesError}
          showPreloader={showPreloader} />
      </main>
      <Footer />
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'saved-movies'} />
    </div>
  );
}

export default SavedMovies;