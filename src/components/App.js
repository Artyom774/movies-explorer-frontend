import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/profile">
          <Profile name={'Виталий'} />
        </Route>
        <Route exact path="/signin">
          <Login />
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

export default App;
