import * as actionTpyes from "../actionTypes/roleActionTypes";

export const createRole = (role) => ({
  type: actionTpyes.CREATE_ROLE_REQUEST,
  payload: role,
});

export const createRoleSuccess = (role) => ({
  type: actionTpyes.CREATE_ROLE_SUCCESS,
  payload: role,
});

export const createRoleError = (error) => ({
  type: actionTpyes.CREATE_ROLE_ERROR,
  payload: error,
});

export const getAllRole = () => ({
  type: actionTpyes.GET_ALL_ROLE,
  payload: undefined,
});

export const getAllRolesSuccess = (roles) => ({
  type: actionTpyes.GET_ALL_ROLE_SUCCESS,
  payload: roles,
});

export const getAllRolesError = (error) => ({
  type: actionTpyes.GET_ALL_ROLE_ERROR,
  payload: error,
});
