import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Footer from './Footer';

function Movies() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <SearchForm />
        <MoviesCardList page={"movies"} />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;