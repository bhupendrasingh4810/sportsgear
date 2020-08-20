import React from 'react';
import './App.css';
import { Router, Redirect, Switch, Route } from 'react-router-dom';

import Admin from './layouts/Admin';
import Auth from './layouts/Auth';
import history from './history';
import ProtectedRoute from './shared/ProtectedRoute';
import { connect } from 'react-redux';

const App = props => {

  const { auth: { isAuthenticated, user } } = props;

  return (
    <Router history={history}>
      <Switch>
        <ProtectedRoute path="/admin" component={Admin} isAuthenticated={isAuthenticated} user={user} />
        {!isAuthenticated
          ? <Route path="/auth" render={props => <Auth {...props} />}></Route>
          : <Redirect from="/" to="/admin/dashboard" />}
      </Switch>
    </Router>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth
});
export default connect(mapStateToProps)(App);