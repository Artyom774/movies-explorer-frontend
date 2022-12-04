import React from 'react';

function SearchForm({ searchMovies, searchFilter, setSearchFilter, page }) {
  const [search, setSearch] = React.useState('');
  const [searchError, setSearchError] = React.useState(true);
  const [errorText, setErrorText] = React.useState('Фильмы');
  const [formValid, setFormValid] = React.useState(false);

  function handleSearch(e) { // отслеживать изменения в поле ввода
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      setSearchError(false);
    } else {
      setSearchError(true);
      setErrorText('Нужно ввести ключевое слово');
    };
  }

  function handleFilterClick() { // переключить фильтр поиска
    setSearchFilter(!searchFilter);
  }

  function handleSearchSubmit(e) { // найти фильмы
    e.preventDefault();
    if (page === 'movies') {
      localStorage.setItem('searchingText', search);
      localStorage.setItem('searchingFilter', searchFilter);
    };
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
      searchMovies('');
    };
  }, [])

  React.useEffect(() => {
    if (searchError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    };
  }, [searchError])
  
  return (
    <section className="search-form-section">
      <form className="search-form" onSubmit={handleSearchSubmit} noValidate>
        <div className="search-form__input-block">
          <input type="text" id="film-input" name="search" value={search} onChange={handleSearch} required className="search-form__input" placeholder={errorText}></input>
          <button
            disabled={!formValid}
            type="submit"
            className={`search-form__submit ` + (!formValid ? `search-form__submit_disabled` : ``)}>
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