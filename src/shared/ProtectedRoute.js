import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated === true ?
            <Component {...props} {...rest} /> : <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
    )} />
);

export default ProtectedRoute;