import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './shared/store/reducers';
import * as serviceWorker from './serviceWorker';

import "./index.scss";
import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

const middlewares = [thunk];

const composeEnhancer = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(...middlewares)));

const render = (Comp) => {
    console.log(store.getState());
    const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
    renderMethod(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));
};

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
