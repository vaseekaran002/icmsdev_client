import { takeEvery } from "redux-saga/effects";
import * as userActionTypes from "store/actionTypes/authActionTypes";
import * as roleActionTypes from "store/actionTypes/roleActionTypes";
import * as tenantActionTypes from "store/actionTypes/tenantActionTypes";
import { handleCreateRole, handleGetRoleByTenant } from "./handlers/role";
import { handleCreateTenant, handleGetAllTenant } from "./handlers/tenant";
import {
  handleSignInUser,
  handleRegisterUser,
  handleLogoutUser,
} from "./handlers/user";

export function* watcherSaga() {
  yield takeEvery(userActionTypes.SIGNIN_USER, handleSignInUser);
  yield takeEvery(userActionTypes.REGISTER_USER, handleRegisterUser);
  yield takeEvery(userActionTypes.LOGOUT_USER, handleLogoutUser);
  yield takeEvery(roleActionTypes.CREATE_ROLE_REQUEST, handleCreateRole);
  yield takeEvery(roleActionTypes.GET_ROLE_BY_TENANT, handleGetRoleByTenant);
  yield takeEvery(tenantActionTypes.CREATE_TENANT_REQUEST, handleCreateTenant);
  yield takeEvery(tenantActionTypes.GET_ALL_TENANT, handleGetAllTenant);
}
