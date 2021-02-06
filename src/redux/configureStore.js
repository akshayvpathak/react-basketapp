import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Grocery } from './Grocery';
import {Basket} from './Basket';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            grocery: Grocery,
            basket: Basket
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};