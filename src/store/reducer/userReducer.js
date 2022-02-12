import * as actionTypes from "../actionTypes/authActionTypes";
import { ICMS_USER_KEY } from "appConstants";

export const initialState = {
  user: undefined,
  error: undefined,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_USER_SUCCESS:
    case actionTypes.REGISTER_USER_SUCCESS:
      localStorage.setItem(ICMS_USER_KEY, JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        error: undefined,
      };
    case actionTypes.SIGNIN_USER_ERROR:
    case actionTypes.REGISTER_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        user: undefined,
      };
    case actionTypes.RESET_USER_DATA:
      localStorage.clear();
      return {
        ...state,
        error: undefined,
        user: undefined,
      };
    case actionTypes.LOGOUT_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
