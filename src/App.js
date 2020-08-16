import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import Admin from './layouts/Admin';
import Auth from './layouts/Auth';
import history from './history';

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/admin" render={props => <Admin {...props} />}></Route>
        <Route path="/auth" render={props => <Auth {...props} />}></Route>
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
