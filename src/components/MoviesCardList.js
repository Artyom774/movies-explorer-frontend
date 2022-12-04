import React from 'react';
import MoviesCard from './MoviesCard';
import { MyMoviesContext } from '../contexts/MyMoviesContext';

function MoviesCardList(props) {
  const myMovies = React.useContext(MyMoviesContext);
  const [windowWidth, setWindowWidth] = React.useState(320);
  const [cardsNumber, setCardsNumber] = React.useState(0);
  const [renderingCards, setRenderingCards] = React.useState([]);
  const [showedAddButton, setShowedAddButton] = React.useState(false);

  function handleAddCard() {
    if (windowWidth < 644) {
      props.setAddCardsNumber(props.addCardsNumber + 5);
    } else {
      if (windowWidth < 1008) {
        props.setAddCardsNumber(props.addCardsNumber + 2);
      } else {
        props.setAddCardsNumber(props.addCardsNumber + 3);
      };
    };
  }

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [])

  React.useEffect(() => {
    if (windowWidth < 644) {
      setCardsNumber(5);
    } else {
      if (windowWidth < 1008) {
        setCardsNumber(8);
      } else {
        setCardsNumber(12);
      };
    };
  }, [windowWidth])

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const newArray = [];
    if (props.page === 'movies') { 
      props.moviesArray.forEach((card) => {
        if (card.nameRU.includes(props.title) && (!props.searchFilter || card.duration <= 40)) {
          newArray.push(card);
        }
      }
      )
    } else {
      myMovies.forEach((card) => {
        if ((props.title === '' || card.nameRU.includes(props.title)) && (!props.searchFilter || card.duration <= 40)) {
          newArray.push(card);
        }
      })
    };
    const slicingArray = newArray.slice(0, cardsNumber + props.addCardsNumber);
    setShowedAddButton(newArray.length > slicingArray.length);
    setRenderingCards([...slicingArray]);
  }, [myMovies, props.moviesArray, props.searchFilter, props.addCardsNumber, cardsNumber])

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
        {(props.page === 'movies' ? 
          renderingCards.map((card) => (
            <MoviesCard
              page={props.page}
              card={card}
              key={props.page === "movies" ? card.id : card._id}
              onDeleteMovie={props.onDeleteMovie}
              onSavedMovie={props.onSavedMovie}
              isLiked={myMovies.some((myCard)=>{return myCard.movieId === card.id})}
              myCardId={myMovies.find((myCard)=> myCard.movieId === card.id)} />)) :
          renderingCards.map((card) => (
            (props.title === '' || card.nameRU.includes(props.title)) &&
              <MoviesCard
                page={props.page}
                card={card}
                key={props.page === "movies" ? card.id : card._id}
                onDeleteMovie={props.onDeleteMovie}
                onSavedMovie={props.onSavedMovie} />)))}
      </div>
      <button className={`movies-card-list__button ` + (showedAddButton ? `` : `display_none`)} onClick={handleAddCard}>{props.page === "movies" ? "Ещё" : ""}</button> 
    </section>
  );
}

export default MoviesCardList;