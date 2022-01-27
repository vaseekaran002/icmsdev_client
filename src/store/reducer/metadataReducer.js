import * as actionTypes from "../actionTypes/metadataActionTypes";

export const initialState = {
  metadatas: [],
  error: undefined,
};

export const metadataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_METADATA_SUCCESS:
      return {
        ...state,
        metadatas: action.payload,
        error: undefined,
      };
    case actionTypes.CREATE_METADATA_ERROR:
      return {
        ...state,
        metadatas: undefined,
        error: action.payload,
      };
    case actionTypes.GET_ALL_METADATA_SUCCESS:
      return {
        ...state,
        metadatas: action.payload,
        error: undefined,
      };
    case actionTypes.GET_ALL_METADATA_ERROR:
      return {
        ...state,
        metadatas: undefined,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default metadataReducer;
