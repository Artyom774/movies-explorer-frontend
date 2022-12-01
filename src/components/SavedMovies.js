import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import Footer from './Footer';
import Navigator from './Navigator';

function SavedMovies(props) {
  const [isPopupOpen, setIsPopupOoen] =React.useState(false);
  const [searchFilter, setSearchFilter] = React.useState(false);  
  const [title, setTitle] = React.useState('');

  function searchMovies(word) {
    setTitle(word);
  }

  React.useState(()=>{
    const savedFilter = localStorage.getItem('searchingSavedFilter');
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
          page={'saved-movies'} />
        <MoviesCardList
          moviesArray={props.myMovies}
          page={'saved-movies'}
          onDeleteMovie={props.onDeleteMovie}
          searchFilter={searchFilter}
          title={title} />
      </main>
      <Footer />
      <Navigator isOpen={isPopupOpen} setIsPopupOoen={setIsPopupOoen} page={'saved-movies'} />
    </div>
  );
}

export default SavedMovies;