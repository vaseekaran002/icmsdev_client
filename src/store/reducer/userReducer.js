import * as actionTypes from '../actionTypes/authActionTypes';

export const initialState = {
   user: undefined,
   error: undefined
};


const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.SIGNIN_USER_SUCCESS:
        case actionTypes.REGISTER_USER_SUCCESS:
            console.log("sign in success===="+action.payload.data);              
            return {
                ...state,
               user: action.payload,
               error: undefined
            };
        case actionTypes.SIGNIN_USER_ERROR:
        case actionTypes.REGISTER_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                user: undefined
            };
        case actionTypes.RESET_USER_DATA:
            return {
                ...state,
                error: undefined,
                user: undefined
            };
        default:
            return state;
        }
};

export default userReducer;