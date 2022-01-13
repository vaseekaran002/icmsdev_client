import * as actionTypes from './actions';

export const signInUser = (login) => ({
    type: actionTypes.SIGNIN_USER,
    payload: login
});

export const logoutUser = (logout) => ({
    type: actionTypes.LOGOUT_USER,
    payload: logout
});

export const resetUserData = () => ({
    type: actionTypes.RESET_USER_DATA
});

export const signInUserSuccess = (user) => ({
    type: actionTypes.SIGNIN_USER_SUCCESS,
    payload: user
});

export const signInUserError = (error) => ({
    type: actionTypes.SIGNIN_USER_ERROR,
    payload: error
});

export const registerUser = (user) => ({
    type: actionTypes.REGISTER_USER,
    payload: user
});

export const registerUserSuccess = (user) => ({
    type: actionTypes.REGISTER_USER_SUCCESS,
    payload: user
});

export const registerUserError = (error) => ({
    type: actionTypes.REGISTER_USER_ERROR,
    payload: error
});

export const initialState = {
   user: undefined,
   error: undefined
};


const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.SIGNIN_USER_SUCCESS:
        case actionTypes.REGISTER_USER_SUCCESS:              
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