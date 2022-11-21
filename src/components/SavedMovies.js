import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Footer from './Footer';

function SavedMovies() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;