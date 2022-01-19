import * as actionTypes from "../actionTypes/roleActionTypes";

export const initialState = {
  roles: [],
  error: undefined,
};

export const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ROLE_SUCCESS:
      return {
        ...state,
        roles: action.payload,
        error: undefined,
      };
    case actionTypes.CREATE_ROLE_ERROR:
      return {
        ...state,
        roles: undefined,
        error: action.payload,
      };
    case actionTypes.GET_ALL_ROLE_SUCCESS:
      return {
        ...state,
        roles: action.payload,
        error: undefined,
      };
    case actionTypes.GET_ALL_ROLE_ERROR:
      return {
        ...state,
        roles: undefined,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default roleReducer;
