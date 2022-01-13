import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/actions';
import { handleSignInUser, handleRegisterUser, handleLogoutUser} from './handlers/user';

export function* watcherSaga() {
    yield takeEvery(actionTypes.SIGNIN_USER, handleSignInUser);
    yield takeEvery(actionTypes.REGISTER_USER, handleRegisterUser);
    yield takeEvery(actionTypes.LOGOUT_USER, handleLogoutUser);
};
