import * as actionTypes from '../actionTypes/authActionTypes';

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