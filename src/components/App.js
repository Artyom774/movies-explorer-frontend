import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Main from './Main';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';
import { register, authorization, getContent } from '../Auth';
import { mainApi } from '../utils/MainApi';
import { moviesApi } from '../utils/MoviesApi';

function App(props) {
  const [loggedIn, setLoggedIn] = React.useState(true);  
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [isSuccess, setIsSuccess] = React.useState(true);
  const [myMovies, setMyMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState([]);

  function tokenCheck(token) { //проверка токена
    if (token) {
      getContent(token).then((res) => {
        if (res) {
        };
      })
      .catch(err => console.log(err));
    };
  }

  function authorizateUser(email, password) { // вход на сайт
    authorization(email, password).then((res) => {
      setLoggedIn(true);
      setIsSuccess(true);
      props.history.push('/movies');
    })
    .catch(err => {
      setIsSuccess(false);
      console.log(err)
    });
  }

  function registrationUser(password, email) { // регистрация нового пользователя
    register(password, email).then((res) => {
      if (res) {
        props.history.push('/signin');
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    })
    .catch(err => console.log(err));
  }

  function updatehUserInfo(name, email) { // обновление информации о пользователе
    const token = localStorage.getItem('token');
    const data = {name: name, email: email};
    if (token) {
      mainApi.refreshUserInfo(data, token)
        .then((res) => {
          setName(res.name);
          setEmail(res.email);
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
  
  function handleDeleteSavedMovie(card) {
    const token = localStorage.getItem('token');
    mainApi
      .deleteMovie(card._id, token)
      .then((newCard) => {
        setMyMovies((state) => state.filter((c) => c._id !== card._id));
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
          setEmail(info.email);
          setName(info.name);
          setMyMovies(loadingMovies);
        })
        .catch(err => console.log(err));
    };
    moviesApi.getMovies()  // загрузка всех фильмов с сервиса
    .then((allMovies)=>{
      setAllMovies(allMovies);
    }).catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <Switch>
        <ProtectedRoute
          exact path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          allMovies={allMovies}
          onSavedMovie={handleSavedMovie} />
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
          name={name}
          email={email}
          updatehUserInfo={updatehUserInfo} />
        <Route exact path="/signin">
          <Login
          authorizateUser={authorizateUser}
          isSuccess={isSuccess} />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
