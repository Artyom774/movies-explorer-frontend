import React from 'react';
import Footer from './Footer';
import logo from '../images/header__logo.svg';

function Movies() {
  return (
    <div className="page">
      <header className="header header_theme_white">
      <a href="/"><img className="header__logo" src={logo} alt="лого" /></a>
        
      </header>
      <main className="main">

      </main>
      <Footer />
    </div>
  );
}

export default Movies;