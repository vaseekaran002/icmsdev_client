import * as actionTypes from "../actionTypes/tenantActionTypes";

const initialState = {
  tenants: [],
  tenant: undefined,
  error: undefined,
};

export const tenantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TENANT_SUCCESS:
      return {
        ...state,
        tenants: [...(state.tenants || []), action.payload],
        tenant: action.payload,
        error: undefined,
      };

    case actionTypes.CREATE_TENANT_ERROR:
      return {
        ...state,
        tenants: undefined,
        tenant: undefined,
        error: action.payload,
      };

    case actionTypes.GET_ALL_TENANT_SUCCESS:
      return {
        ...state,
        tenants: action.payload,
        error: undefined,
        tenant: undefined,
      };

    case actionTypes.GET_ALL_TENANT_ERROR:
      return {
        ...state,
        tenants: undefined,
        tenant: undefined,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default tenantReducer;
