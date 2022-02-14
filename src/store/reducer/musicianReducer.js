import * as actionTypes from "../actionTypes/musicianActionTypes";

export const initialState = {
  musicians: [],
  members: [],
  musician: undefined,
  error: undefined,
};

const musicianReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MUSICIANS_SUCCESS:
      return {
        ...state,
        musicians: action.payload,
        error: undefined,
      };
    case actionTypes.GET_MUSICIANS_ERROR:
      return {
        ...state,
        musicians: undefined,
        error: action.payload,
      };
    case actionTypes.GET_MUSICIAN_SUCCESS:
      return {
        ...state,
        musician: action.payload,
        error: undefined,
      };
    case actionTypes.GET_MUSICIAN_ERROR:
      return {
        ...state,
        musician: undefined,
        error: action.payload,
      };
    case actionTypes.GET_MUSICIAN_MEMBERS_SUCCESS:
      return {
        ...state,
        error: undefined,
        members: action.payload,
      };
    case actionTypes.UPDATE_MUSICIAN_SUCCESS:
      return {
        ...state,
        musician: action.payload,
        error: undefined,
      };
    case actionTypes.UPDATE_MUSICIAN_ERROR:
      return {
        ...state,
        error: action.payload,
        musician: undefined,
      };
    case actionTypes.ADD_MUSICIAN_MEMBER_SUCCESS:
      return {
        ...state,
        members: action.payload,
      };
    case actionTypes.ADD_MUSICIAN_MEMBER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default musicianReducer;
