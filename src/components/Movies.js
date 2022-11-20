import React from 'react';
import Footer from './Footer';
import logo from '../images/header__logo.svg';

function Movies() {
  const [search, setSearch] = React.useState('');
  const [searchFilter, setSearchFilter] = React.useState(true);

  function handleSearch(e) { // отслеживать изменения в поле ввода
    setSearch(e.target.value);
  }

  function handleFilterClick(e) { // переключить фильтр поиска
    setSearchFilter(!searchFilter);
  }

  function handleSearchSubmit(e) { // найти фильмы
    e.preventDefault();
  }

  return (
    <div className="page">
      <header className="header header_theme_white">
        <a href="/"><img className="header__logo" src={logo} alt="лого" target="_blank" /></a>
        <div className="header__links">
          <a className="header__link header__link_type_movies" href="/movies" target="_blank">Фильмы</a>
          <a className="header__link header__link_type_saved-movies" href="/saved-movies" target="_blank">Сохранённые фильмы</a>
          <a className="header__links" href="/profile" target="_blank">
            <p className="header__link header__link_type_profile">Аккаунт</p>
            <div className="header__profile-link-icon" />
          </a>
        </div>
      </header>
      <main className="main">
        <section className="search-form-section">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <div className="search-form__input-block">
              <input type="text" id="email-input" name="search" value={search} onChange={handleSearch} required className="search-form__input" placeholder="Фильм"></input>
              <button type="submit" className="search-form__submit">Найти</button>
            </div>
            <div className="search-form__flex-block">
              <p className="search-form__text">Короткометражки</p>
              <button type="button" className={`search-form__filter ` + (searchFilter ? `search-form__filter_activated` : ``)} onClick={handleFilterClick}></button>
            </div>
          </form>
        </section>
        <section className="movies-card-list">

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Movies;