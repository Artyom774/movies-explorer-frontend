import React from 'react';

function SearchForm({searchMovies, searchFilter, setSearchFilter, page}) {
  const [search, setSearch] = React.useState('');

  function handleSearch(e) { // отслеживать изменения в поле ввода
    setSearch(e.target.value);
  }

  function handleFilterClick() { // переключить фильтр поиска
    setSearchFilter(!searchFilter);
  }

  function handleSearchSubmit(e) { // найти фильмы
    e.preventDefault();
    if (page === 'movies') {
      localStorage.setItem('searchingText', search);
      localStorage.setItem('searchingFilter', searchFilter);
    } else {
      localStorage.setItem('searchingSavedText', search);
      localStorage.setItem('searchingSavedFilter', searchFilter);
    }
    searchMovies(search);
  }

  React.useState(()=>{
    if (page === 'movies') {
      const savedText = localStorage.getItem('searchingText');
      if (savedText) {
        setSearch(savedText);
        searchMovies(savedText);
      }
    } else {
      const savedText = localStorage.getItem('searchingSavedText');
      if (savedText) {
        setSearch(savedText);
      }
    };
  }, [])
  
  return (
    <section className="search-form-section">
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <div className="search-form__input-block">
          <input type="text" id="film-input" name="search" value={search} onChange={handleSearch} required className="search-form__input" placeholder="Фильм"></input>
          <button type="submit" className="search-form__submit">Найти</button>
        </div>
        <div className="search-form__flex-block">
          <p className="search-form__text">Короткометражки</p>
          <button type="button" className={`search-form__filter ` + (searchFilter ? `search-form__filter_activated` : ``)} onClick={handleFilterClick}></button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;