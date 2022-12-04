import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { MyMoviesContext } from '../contexts/MyMoviesContext';
import ProtectedRoute from './ProtectedRoute';
import Main from './Main';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';
import { registerUser, authorization } from '../Auth';
import { mainApi } from '../utils/MainApi';

function App(props) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [myMovies, setMyMovies] = React.useState([]);
  const [isSuccess, setIsSuccess] = React.useState(true);

  function authorizateUser(email, password) { // вход на сайт
    authorization(email, password)
      .then((res) => {
        setLoggedIn(true);
        setIsSuccess(true);
        props.history.push('/movies');
        Promise.all([
          mainApi.getUserInfo(localStorage.getItem('token')),  // запрос информации о профиле
          mainApi.getSavedMovies(localStorage.getItem('token'))  // загрузка сохранённых фильмов
        ])
          .then(([info, loadingMovies])=>{
            setCurrentUser(info);
            setMyMovies(loadingMovies);
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        setIsSuccess(false);
        setLoggedIn(false);
        localStorage.removeItem('token');
        console.log(err);
      });
  }

  function registrationUser(email, password, name) { // регистрация нового пользователя
    registerUser(email, password, name)
      .then((res) => {
        setIsSuccess(true);
        authorizateUser(email, password);
      })
      .catch(err => {
        setIsSuccess(false);
        console.log(err)
      });
  }

  function updatehUserInfo(name, email) { // обновление информации о пользователе
    const token = localStorage.getItem('token');
    const data = {name: name, email: email};
    if (token) {
      mainApi.refreshUserInfo(data, token)
        .then((res) => {
          setCurrentUser(res);
        })
        .catch(err => console.log(err));
    }
  }

  function handleSavedMovie(data) {  // создать новую карточку
    const token = localStorage.getItem('token');
    mainApi
      .savedNewMovie(data, token)
      .then((newCard) => {
        setMyMovies([newCard, ...myMovies]);
      })
      .catch(err => console.log(err));
  }
  
  function handleDeleteSavedMovie(cardId) {
    const token = localStorage.getItem('token');
    mainApi
      .deleteMovie(cardId, token)
      .then((res) => {
        setMyMovies((state) => state.filter((c) => c._id !== cardId));
      })
      .catch(err => console.log(err));
  }

  React.useEffect(()=>{ // запрос информации при входе на сайт
    const token = localStorage.getItem('token');
    if (token) {
      Promise.all([
        mainApi.getUserInfo(token),  // запрос информации о профиле
        mainApi.getSavedMovies(token)  // загрузка сохранённых фильмов
      ])
        .then(([info, loadingMovies])=>{
          setLoggedIn(true);
          setCurrentUser(info);
          setMyMovies(loadingMovies);
        })
        .catch(err => console.log(err));
    };
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <MyMoviesContext.Provider value={myMovies}>
        <div className="App">
          <Switch>
            <ProtectedRoute
              exact path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              onSavedMovie={handleSavedMovie}
              onDeleteMovie={handleDeleteSavedMovie}
              myMovies={myMovies} />
            <ProtectedRoute
              exact path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              myMovies={myMovies}
              onDeleteMovie={handleDeleteSavedMovie} />
            <ProtectedRoute
              exact path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              updatehUserInfo={updatehUserInfo}
              setLoggedIn={setLoggedIn}
              setHistory={props.history.push} />
            <Route exact path="/signin">
              <Login
              authorizateUser={authorizateUser}
              isSuccess={isSuccess} />
            </Route>
            <Route exact path="/signup">
              <Register
              registrationUser={registrationUser}
              isSuccess={isSuccess} />
            </Route>
            <Route exact path="/">
              <Main
                loggedIn={loggedIn} />
            </Route>
            <Route path="/">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </MyMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
