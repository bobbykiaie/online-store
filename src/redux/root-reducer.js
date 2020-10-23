//The code that combines all of your roots together
//All reducers going to this component
//Reducer is a function that gets two properties: State (initial) & Action
//they all have two properties: type & payload

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer.js';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})



