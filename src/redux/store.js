import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];  //catches the action, consoles the result, and passes the action to the reducer 

const store = createStore(rootReducer, applyMiddleware(...middlewares))


export default store;