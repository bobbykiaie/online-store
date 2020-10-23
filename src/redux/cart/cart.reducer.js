import CartActionTypes from './cart.types';

const INITIAL_STATE = {  //we want to hide the drop down once we first come on to website
    hidden: true
};

//if no value comes into the cartReducer, default state will be INITIAL_STATE
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden //whatever hidden value comes in, convert to the opposit
                
            }

            default:
                return state;
    }
}

export default cartReducer;