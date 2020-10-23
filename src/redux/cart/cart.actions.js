import CartActionTypes from './cart.types';


//payload is optional property on action
//this is the action that is oging ot be passed to the 
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})