import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Footer from './Footer';
import Navigator from './Navigator';

function SavedMovies() {
  const [isPopupOpen, setIsPopupOoen] =React.useState(false);

  return (
    <div className="page">
      <Header setIsPopupOoen={setIsPopupOoen} />
      <main className="main">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'saved-movies'} />
    </div>
  );
}

export default SavedMovies;