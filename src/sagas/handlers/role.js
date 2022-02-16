import { call, put } from "redux-saga/effects";
import {
  createRole,
  getRolesByTenant,
  getRolesByTenantAuth,
} from "sagas/requests/role";
import {
  createRoleSuccess,
  createRoleError,
  getRolesByTenantSuccess,
  getRolesByTenantError,
} from "store/actions/roleActions";

export function* handleCreateRole({ payload }) {
  try {
    const response = yield call(createRole, payload);
    if (response.status === 200) {
      yield put(createRoleSuccess(response.data));
    } else {
      yield put(createRoleError(response.data));
    }
  } catch (error) {
    yield put(createRoleError(error.response.data));
  }
}

export function* handleGetRoleByTenant({ payload }) {
  try {
    const response = yield call(getRolesByTenant, payload);
    if (response.status === 200) {
      yield put(getRolesByTenantSuccess(response.data.data));
    } else {
      yield put(getRolesByTenantError(response.data.data));
    }
  } catch (error) {
    yield put(getRolesByTenantError(error.response.data));
  }
}

export function* handleGetRoleByTenantAuth({ payload }) {
  try {
    const response = yield call(getRolesByTenantAuth, payload);
    if (response.status === 200) {
      yield put(getRolesByTenantSuccess(response.data.data));
    } else {
      yield put(getRolesByTenantError(response.data.data));
    }
  } catch (error) {
    yield put(getRolesByTenantError(error.response.data));
  }
}
