import * as actionTpyes from "../actionTypes/roleActionTypes";

export const initialState = {
  roles: [],
  error: undefined,
};

export const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTpyes.CREATE_ROLE_SUCCESS:
      return {
        ...state,
        roles: action.paypoad,
        error: undefined,
      };
    case actionTpyes.CREATE_ROLE_ERROR:
      return {
        ...state,
        roles: undefined,
        error: action.payload,
      };
    case actionTpyes.GET_ALL_ROLE_SUCCESS:
      return {
        ...state,
        roles: action.payload,
        error: undefined,
      };
    case actionTpyes.GET_ALL_ROLE_ERROR:
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
