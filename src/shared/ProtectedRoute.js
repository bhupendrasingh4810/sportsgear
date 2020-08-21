import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        rest.auth.isAuthenticated === true ?
            <Component {...props} {...rest} /> : <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
    )} />
);

export default ProtectedRoute;