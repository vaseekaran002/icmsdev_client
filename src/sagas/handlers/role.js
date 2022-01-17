import { call, put } from 'redux-saga/effects';
import { createRole,getAllRoles } from 'sagas/requests/role';
import { createRoleSuccess ,createRoleError} from 'store/actions/roleActions'; 

export function* handleCreateRole({payload}){
    try{
        console.log("hand",payload)
        const response = yield call(createRole, payload);
        if(response.status === 200){
            yield put(createRoleSuccess(response.data));
        }else{
            yield put(createRoleError(response.data));
        }       
    }catch(error){
        yield put(createRoleError(error.response.data));
    }
}