import React from 'react';

function SearchForm({ searchMovies, searchFilter, setSearchFilter, page }) {
  const [search, setSearch] = React.useState('');
  const [errorText, setErrorText] = React.useState('Фильмы');

  function handleSearch(e) { // отслеживать изменения в поле ввода
    setSearch(e.target.value);
  }

  function handleFilterClick() { // переключить фильтр поиска
    if (page === 'movies') {
      localStorage.setItem('searchingFilter', !searchFilter);
    };
    setSearchFilter(!searchFilter);
  }

  function handleSearchSubmit(e) { // найти фильмы
    e.preventDefault();
    if (search.length > 0) {
      if (page === 'movies') {
        localStorage.setItem('searchingText', search);
        localStorage.setItem('searchingFilter', searchFilter);
      };
      searchMovies(search);
    } else {
      setErrorText('Нужно ввести ключевое слово');
    };
  }

  React.useState(()=>{
    if (page === 'movies') {
      const savedText = localStorage.getItem('searchingText');
      if (savedText) {
        setSearch(savedText);
        searchMovies(savedText);
      }
    } else {      
      searchMovies('');
    };
  }, [])
  
  return (
    <section className="search-form-section">
      <form className="search-form" onSubmit={handleSearchSubmit} noValidate>
        <div className="search-form__input-block">
          <input type="text" id="film-input" name="search" value={search} onChange={handleSearch} className="search-form__input" placeholder={errorText}></input>
          <button
            type="submit"
            className="search-form__submit">
              Найти
          </button>
        </div>
        <div className="search-form__flex-block">
          <p className="search-form__text">Короткометражки</p>
          <button
            type="button"
            className={`search-form__filter ` + (searchFilter ? `search-form__filter_activated` : ``)}
            onClick={handleFilterClick}></button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;