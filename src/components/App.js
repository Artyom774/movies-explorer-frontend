import React from 'react';
import { Route, Router, Switch, Redirect, withRouter } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
