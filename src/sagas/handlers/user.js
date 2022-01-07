import { call, put } from 'redux-saga/effects';
import { requestSignInUser } from 'sagas/requests/user';
import { signInUserSuccess, signInUserError } from 'store/userReducer';

export function* handleSignInUser({payload}){
    try{
        console.log("handle signin");
        const response = yield call(requestSignInUser, payload);
        if(response.status == 200){
            yield put(signInUserSuccess(response.data));
        }else{
            yield put(signInUserError(response.data));
        }
       
    }catch(error){
        console.log(error);
        yield put(signInUserError(error.response.data));
    }

}