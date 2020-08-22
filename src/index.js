import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import productsReducer from './Store/Reducers/Products'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
    products:productsReducer
})
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

const app=<Provider store={store}>
    <BrowserRouter>
<App></App>
    </BrowserRouter>
</Provider>

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
