import React from 'react';
import MoviesCard from './MoviesCard';
import { MyMoviesContext } from '../contexts/MyMoviesContext';
import Preloader from './Preloader';

function MoviesCardList({ page, moviesArray, title, searchFilter, setAddCardsNumber, addCardsNumber, onDeleteMovie, onSavedMovie, moviesError, showPreloader }) {
  const myMovies = React.useContext(MyMoviesContext);
  const [windowWidth, setWindowWidth] = React.useState(320);
  const [cardsNumber, setCardsNumber] = React.useState(0);
  const [renderingCards, setRenderingCards] = React.useState([]);
  const [showedAddButton, setShowedAddButton] = React.useState(false);

  function handleAddCard() {
    if (windowWidth < 644) {
      setAddCardsNumber(addCardsNumber + 5);
    } else {
      if (windowWidth < 1008) {
        setAddCardsNumber(addCardsNumber + 2);
      } else {
        setAddCardsNumber(addCardsNumber + 3);
      };
    };
  }

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 644) {
      setCardsNumber(5);
    } else {
      if (window.innerWidth < 1008) {
        setCardsNumber(8);
      } else {
        setCardsNumber(12);
      };
    };
    window.addEventListener("resize", () => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 1000);
    });
  }, [])

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const newArray = [];
    if (page === 'movies') { 
      moviesArray.forEach((card) => {
        if (card.nameRU.includes(title) && (!searchFilter || card.duration <= 40)) {
          newArray.push(card);
        }
      }
      )
    } else {
      myMovies.forEach((card) => {
        if ((title === '' || card.nameRU.includes(title)) && (!searchFilter || card.duration <= 40)) {
          newArray.push(card);
        }
      })
    };
    const slicingArray = newArray.slice(0, cardsNumber + addCardsNumber);
    if (page === 'movies') {
      setShowedAddButton(newArray.length > slicingArray.length);
    } else {
      setShowedAddButton(newArray.map((card) => (title === '' || card.nameRU.includes(title))).length > slicingArray.length);
    };
    setRenderingCards([...slicingArray]);
  }, [myMovies, moviesArray, searchFilter, addCardsNumber, cardsNumber, title, windowWidth])

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
        {(page === 'movies' ? 
          renderingCards.map((card) => (
            <MoviesCard
              page={page}
              card={card}
              key={page === "movies" ? card.id : card._id}
              onDeleteMovie={onDeleteMovie}
              onSavedMovie={onSavedMovie}
              isLiked={myMovies.some((myCard)=>{return myCard.movieId === card.id})}
              myCardId={myMovies.find((myCard)=> myCard.movieId === card.id)} />)) :
          renderingCards.map((card) => (
            (title === '' || card.nameRU.includes(title)) &&
              <MoviesCard
                page={page}
                card={card}
                key={page === "movies" ? card.id : card._id}
                onDeleteMovie={onDeleteMovie}
                onSavedMovie={onSavedMovie} />)))}
      </div>
      {showPreloader && <Preloader />}
      <p
        className={`movies-card-list__text ` + (renderingCards.length ? `display_none` : ``)}>
          Ничего не найдено.
      </p>
      <p
        className={`movies-card-list__text ` + (moviesError ? `` : `display_none`)}>
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
      </p>
      <button className={`movies-card-list__button ` + (showedAddButton ? `` : `display_none`)} onClick={handleAddCard}>Ещё</button> 
    </section>
  );
}

export default MoviesCardList;