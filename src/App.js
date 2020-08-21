import React from 'react';
import './App.css';
import { Router, Redirect, Switch, Route } from 'react-router-dom';

import Admin from './layouts/Admin';
import Auth from './layouts/Auth';
import history from './history';
import ProtectedRoute from './shared/ProtectedRoute';
import { connect } from 'react-redux';

const App = props => {

  const { auth, app } = props;

  return (
    <Router history={history}>
      <Switch>
        <ProtectedRoute path="/admin" component={Admin} auth={auth} app={app} />
        <Route path="/auth" render={props => <Auth {...props} auth={auth} />}></Route>
        <Redirect from="*" to="/auth/login" />
      </Switch>
    </Router>
  );
}

const mapStateToProps = ({ auth, app }) => ({
  auth,
  app
});
export default connect(mapStateToProps)(App);