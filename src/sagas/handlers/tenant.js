import { call, put } from "redux-saga/effects";
import { createTenant, getAllTenants } from "sagas/requests/tenant";
import {
  createTenantSuccess,
  createTenantError,
  getAllTenantSuccess,
  getAllTenantError
} from "store/actions/tenantActions";

export function* handleCreateTenant({ payload }) {
    try{
        
        const response = yield call(createTenant,payload);
        if(response.status === 200){
            yield put(createTenantSuccess(response.data))
        } else{
            yield put(createTenantError(response.data))
        }
    } catch(error){
        yield put(createTenantError(error.response.data))
    }
}

export function* handleGetAllTenant({payload}) {
    try{
        const response = yield call(getAllTenants,payload);
        if(response.status === 200){
            yield put(getAllTenantSuccess(response.data.data))
        } else{
            yield put(getAllTenantError(response.data.data))
        }
    } catch(error){
        yield put(getAllTenantError(error.response.data))
    }
}