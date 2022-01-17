import { call, put } from 'redux-saga/effects';
import { requestSignInUser, requestRegisternUser, requestLogoutUser } from 'sagas/requests/user';
import { signInUserSuccess, signInUserError, registerUserSuccess, registerUserError, resetUserData} from 'store/actions/authActions';

export function* handleSignInUser({payload}){
    try{
        const response = yield call(requestSignInUser, payload);
        if(response.status === 200){
            yield put(signInUserSuccess(response.data.data));
        }else{
            yield put(signInUserError(response.data.data));
        }       
    }catch(error){
        yield put(signInUserError(error.response.data));
    }
}

export function* handleLogoutUser({payload}){
    try{
        const response = yield call(requestLogoutUser, payload);
        yield put(resetUserData(response.data.data));       
    }catch(error){
        yield put(resetUserData(error.response.data));
    }
}

export function* handleRegisterUser({payload}){
    try{
        const response = yield call(requestRegisternUser, payload);
        if(response.status === 200){
            yield put(registerUserSuccess(response.data));
        }else{
            yield put(registerUserError(response.data));
        }       
    }catch(error){
        console.log(error);
        yield put(registerUserError(error.response.data));
    }
}