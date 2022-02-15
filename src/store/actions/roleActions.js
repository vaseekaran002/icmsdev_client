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

export const getRoleByTenant = () => ({
  type: actionTpyes.GET_ROLE_BY_TENANT,
  payload: undefined,
});

export const getRolesByTenantSuccess = (roles) => ({
  type: actionTpyes.GET_ROLE_BY_TENANT_SUCCESS,
  payload: roles,
});

export const getRolesByTenantError = (error) => ({
  type: actionTpyes.GET_ROLE_BY_TENANT_ERROR,
  payload: error,
});

export const getRolesByTenantAuth = () => ({
  type: actionTpyes.GET_ROLE_BY_TENANT_AUTH,
  payload: undefined,
});
