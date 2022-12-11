import React from 'react';
import MoviesCard from './MoviesCard';
import { MyMoviesContext } from '../contexts/MyMoviesContext';
import Preloader from './Preloader';
import * as allConstants from '../utils/constants';

function MoviesCardList({ page, moviesArray, title, searchFilter, setAddCardsNumber, addCardsNumber, onDeleteMovie, onSavedMovie, moviesError, showPreloader }) {
  const myMovies = React.useContext(MyMoviesContext);
  const [windowWidth, setWindowWidth] = React.useState(320);
  const [cardsNumber, setCardsNumber] = React.useState(0);
  const [renderingCards, setRenderingCards] = React.useState([]);
  const [showedAddButton, setShowedAddButton] = React.useState(false);

  const handleAddCard = () => {
    if (windowWidth < allConstants.pointChangeNumberCardsMobileTablet) {
      setAddCardsNumber(addCardsNumber + allConstants.addingMobileVisibilityCards);
    } else {
      if (windowWidth < allConstants.pointChangeNumberCardsTabletDesktop) {
        setAddCardsNumber(addCardsNumber + allConstants.addingTabletVisibilityCards);
      } else {
        setAddCardsNumber(addCardsNumber + allConstants.addingDesktopVisibilityCards);
      };
    };
  }

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < allConstants.pointChangeNumberCardsMobileTablet) {
      setCardsNumber(allConstants.startMobileVisibilityCards);
    } else {
      if (window.innerWidth < allConstants.pointChangeNumberCardsTabletDesktop) {
        setCardsNumber(allConstants.startTabletVisibilityCards);
      } else {
        setCardsNumber(allConstants.startDesktopVisibilityCards);
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
        if (card.nameRU.toLowerCase().includes(title.toLowerCase()) && (!searchFilter || card.duration <= allConstants.kortfilmenDuration)) {
          newArray.push(card);
        }
      }
      )
    } else {
      myMovies.forEach((card) => {
        if ((title === '' || card.nameRU.toLowerCase().includes(title.toLowerCase())) && (!searchFilter || card.duration <= allConstants.kortfilmenDuration)) {
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
            (title === '' || card.nameRU.toLowerCase().includes(title.toLowerCase())) &&
              <MoviesCard
                page={page}
                card={card}
                key={page === "movies" ? card.id : card._id}
                onDeleteMovie={onDeleteMovie}
                onSavedMovie={onSavedMovie} />)))}
      </div>
      {showPreloader && <Preloader />}
      <p
        className={`movies-card-list__text ` + ((renderingCards.length || (page === 'movies' && moviesArray.length === 0)) ? `display_none` : ``)}>
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