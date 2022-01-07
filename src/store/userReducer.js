import * as actionTypes from './actions';

export const signInUser = (login) => ({
    type: actionTypes.SIGNIN_USER,
    payload: login
});

export const signInUserSuccess = (user) => ({
    type: actionTypes.SIGNIN_USER_SUCCESS,
    payload: user
});

export const signInUserError = (error) => ({
    type: actionTypes.SIGNIN_USER_ERROR,
    payload: error
});

export const initialState = {
   user: undefined,
   error: undefined
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SIGNIN_USER_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
               user: action.payload
            };
        case actionTypes.SIGNIN_USER_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
        }
};

export default userReducer;