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

function App() {  
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className="App">
      <Switch>
        <ProtectedRoute
          exact path="/movies"
          loggedIn={loggedIn}
          component={Movies} />
        <ProtectedRoute
          exact path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies} />
        <ProtectedRoute
          exact path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          name={'Виталий'} />
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

export default withRouter(App);
