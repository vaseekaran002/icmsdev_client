import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/actions';
import { handleSignInUser } from './handlers/user';

export function* watcherSaga() {
    yield takeEvery(actionTypes.SIGNIN_USER, handleSignInUser);
};