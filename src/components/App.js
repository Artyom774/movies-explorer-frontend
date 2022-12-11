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
  const [loggedIn, setLoggedIn] = React.useState(false); // пользователь вошёл в учётную запись или нет?
  const [currentUser, setCurrentUser] = React.useState({}); // данные о текущем пользователе
  const [myMovies, setMyMovies] = React.useState([]); // сохранённые фильмы текущего пользователя
  const [allMovies, setAllMovies] = React.useState([]); // массив всех фильмов с сервиса
  const [isSuccess, setIsSuccess] = React.useState(true); // отвечает за вывод сообщения об ошибке при регистрации и авторизации
  const [allMoviesError, setAllMoviesError] = React.useState(false); // при загрузке всех фильмов с сервиса произошла ошибка?
  const [savedMoviesError, setSavedMoviesError] = React.useState(false); // при загрузке сохранённых фильмов с сервера произошла ошибка?
  const [showPreloader, setShowPreloader] = React.useState(false); // отвечает за отображение прелоадера во время загрузки карточек
  const [editProfileSubmitText, setEditProfileSubmitText] = React.useState('Редактировать'); // текст на кнопке submit в компоненте Profile

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
            setSavedMoviesError(false);
            setCurrentUser(info);
            setMyMovies(loadingMovies);
          })
          .catch((err) => {
            setSavedMoviesError(true);
            console.log(err);
          });
      })
      .catch(err => {
        setIsSuccess(false);
        setLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('searchingFilter');
        localStorage.removeItem('searchingText');
        props.history.push('/');
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
    setEditProfileSubmitText('Редактирование...');
    const token = localStorage.getItem('token');
    const data = {name: name, email: email};
    if (token) {
      mainApi.refreshUserInfo(data, token)
        .then((res) => {
          setCurrentUser(res);
          setEditProfileSubmitText('Данные обновлены!');
          setTimeout(() => setEditProfileSubmitText('Редактировать'), 2000);
        })
        .catch((err) => {
          setEditProfileSubmitText('Ошибка!');
          setTimeout(() => setEditProfileSubmitText('Редактировать'), 2000);
          console.log(err);
          if (err.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('searchingFilter');
            localStorage.removeItem('searchingText');
            props.history.push('/');
          };
        });
    }
  }

  function handleSavedMovie(data) {  // сохранить карточку с фильмом
    const token = localStorage.getItem('token');
    mainApi
      .savedNewMovie(data, token)
      .then((newCard) => {
        setMyMovies([newCard, ...myMovies]);
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('searchingFilter');
          localStorage.removeItem('searchingText');
          props.history.push('/');
        };
      });
  }
  
  function handleDeleteSavedMovie(cardId) { // удалить карточку из сохранённых
    const token = localStorage.getItem('token');
    mainApi
      .deleteMovie(cardId, token)
      .then((res) => {
        setMyMovies((state) => state.filter((c) => c._id !== cardId));
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('searchingFilter');
          localStorage.removeItem('searchingText');
          props.history.push('/');
        };
      });
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
        .catch((err) => {
          console.log(err);
          if (err.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('searchingFilter');
            localStorage.removeItem('searchingText');
            props.history.push('/');
          };
        });
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
              allMoviesError={allMoviesError}
              setAllMoviesError={setAllMoviesError}
              showPreloader={showPreloader}
              setShowPreloader={setShowPreloader}
              allMovies={allMovies}
              setAllMovies={setAllMovies} />
            <ProtectedRoute
              exact path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              onDeleteMovie={handleDeleteSavedMovie}
              savedMoviesError={savedMoviesError}
              showPreloader={showPreloader} />
            <ProtectedRoute
              exact path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              updatehUserInfo={updatehUserInfo}
              setLoggedIn={setLoggedIn}
              setHistory={props.history.push}
              editProfileSubmitText={editProfileSubmitText} />
            <ProtectedRoute
              exact path="/signin"
              loggedIn={!loggedIn}
              component={Login}
              authorizateUser={authorizateUser}
              isSuccess={isSuccess} />
            <ProtectedRoute
              exact path="/signup"
              loggedIn={!loggedIn}
              component={Register}
              registrationUser={registrationUser}
              isSuccess={isSuccess} />
            <Route exact path="/">
              <Main
                loggedIn={loggedIn} />
            </Route>
            <Route path="/">
              <NotFound
                history={props.history} />
            </Route>
          </Switch>
        </div>
      </MyMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
