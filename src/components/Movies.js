import React from 'react';
import Footer from './Footer';
import logo from '../images/header__logo.svg';

function Movies() {
  const [search, setSearch] = React.useState('');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleFilterClick(e) {

  }

  function handleSearchSubmit(e) {
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
          <form className="search-form">
            <input type="text" id="email-input" name="search" value={search} onChange={handleSearch} required className="search-form__input" placeholder="Фильм"></input>
            <button type="submit" className="search-form__search">Найти</button>
            <p className="search-form__text">Короткометражки</p>
            <button type="button" className="search-form__filter" onClick={handleFilterClick}></button>
          </form>
        </section>
        <section className="movies-card-list" onSubit={handleSearchSubmit}>

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Movies;