import { takeEvery } from 'redux-saga/effects';
import * as userActionTypes from 'store/actions/userActions';
import * as roleActionTypes from 'store/actions/roleActions'
import { handleCreateRole } from './handlers/role';
import { handleSignInUser, handleRegisterUser, handleLogoutUser} from './handlers/user';

export function* watcherSaga() {
    yield takeEvery(userActionTypes.SIGNIN_USER, handleSignInUser);
    yield takeEvery(userActionTypes.REGISTER_USER, handleRegisterUser);
    yield takeEvery(userActionTypes.LOGOUT_USER, handleLogoutUser);
    yield takeEvery(roleActionTypes.CREATE_ROLE_REQUEST,handleCreateRole);
};
