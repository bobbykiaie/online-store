//state
import {UserActionTypes} from './user.types'

const INITIAL_STATE = {
    currentUser: null
}
//=in () is an ES6 syntax that allows default value if passed variable is undefined
//it wont use default value of passed variable is "null" because null is a valid value

//every single reducer from stemming from the root reduce gets every action that is fired
//even if the action is not related to the reducer ...return in switch statement takes care of this
const userReducer = (state = INITIAL_STATE, action) => {  
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER: 
            return {
                ...state,
                currentUser: action.payload  
            }
        
        default: 
            return state;
    }
}

export default userReducer;