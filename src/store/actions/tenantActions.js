import * as actionTypes from "../actionTypes/tenantActionTypes";

export const createTenant = (tenant) => ({
  type: actionTypes.CREATE_TENANT_REQUEST,
  payload: tenant,
});

export const createTenantSuccess = (tenant) => ({
  type: actionTypes.CREATE_TENANT_SUCCESS,
  payload: tenant,
});

export const createTenantError = (error) => ({
  type: actionTypes.CREATE_TENANT_ERROR,
  payload: error,
});

export const getAllTenant = () => ({
  type: actionTypes.GET_ALL_TENANT,
  payload: undefined,
});

export const getAllTenantSuccess = (tenants) => ({
  type: actionTypes.GET_ALL_TENANT_SUCCESS,
  payload: tenants,
});

export const getAllTenantError = (error) => ({
  type: actionTypes.GET_ALL_TENANT_ERROR,
  payload: error,
});
