import { takeEvery } from "redux-saga/effects";
import * as userActionTypes from "store/actionTypes/authActionTypes";
import * as roleActionTypes from "store/actionTypes/roleActionTypes";
import * as tenantActionTypes from "store/actionTypes/tenantActionTypes";
import * as metadataActionTypes from "store/actionTypes/metadataActionTypes";
import * as contractActionTypes from "store/actionTypes/contractActionTypes";
import {
  handleCreateRole,
  handleGetRoleByTenant,
  handleGetRoles,
} from "./handlers/role";
import { handleCreateTenant, handleGetAllTenant } from "./handlers/tenant";
import { handleGetContracts, handleUpdateContract } from "./handlers/contract";
import {
  handleSignInUser,
  handleRegisterUser,
  handleLogoutUser,
} from "./handlers/user";
import {
  handleCreateMetadata,
  handleGetAllMetadata,
} from "./handlers/metadata";

export function* watcherSaga() {
  yield takeEvery(userActionTypes.SIGNIN_USER, handleSignInUser);
  yield takeEvery(userActionTypes.REGISTER_USER, handleRegisterUser);
  yield takeEvery(userActionTypes.LOGOUT_USER, handleLogoutUser);
  yield takeEvery(roleActionTypes.CREATE_ROLE_REQUEST, handleCreateRole);
  yield takeEvery(roleActionTypes.GET_ROLE_BY_TENANT, handleGetRoleByTenant);
  yield takeEvery(tenantActionTypes.CREATE_TENANT_REQUEST, handleCreateTenant);
  yield takeEvery(tenantActionTypes.GET_ALL_TENANT, handleGetAllTenant);
  yield takeEvery(
    metadataActionTypes.CREATE_METADATA_REQUEST,
    handleCreateMetadata
  );
  yield takeEvery(metadataActionTypes.GET_ALL_METADATA, handleGetAllMetadata);
  yield takeEvery(contractActionTypes.GET_CONTRACTS, handleGetContracts);
  yield takeEvery(contractActionTypes.UPDATE_CONTRACT, handleUpdateContract);
}
