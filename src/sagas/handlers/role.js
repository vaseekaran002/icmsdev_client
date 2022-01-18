import { call, put } from "redux-saga/effects";
import { createRole, getAllRoles } from "sagas/requests/role";
import {
  createRoleSuccess,
  createRoleError,
  getAllRolesSuccess,
  getAllRolesError,
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

export function* handleGetAllRole({ payload }) {
  try {
    const response = yield call(getAllRoles, payload);
    if (response.status === 200) {
      yield put(getAllRolesSuccess(response.data.data));
    } else {
      yield put(getAllRolesError(response.data.data));
    }
  } catch (error) {
    yield put(getAllRolesError(error.response.data));
  }
}
