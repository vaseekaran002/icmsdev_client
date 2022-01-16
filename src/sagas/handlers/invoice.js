import { call, put } from 'redux-saga/effects';
import { getInvoices, updateInvoice, getInvoice} from 'sagas/requests/musician';
import { getInvoicesSuccess, getInvoicesError, updateInvoiceSuccess, updateInvoiceError, getInvoiceSuccess, getInvoiceError} from 'store/musicianReducer';

export function* handleGetInvoices({payload}){
    try{
        const response = yield call(getInvoices, payload);
        if(response.status === 200){
            yield put(getInvoicesSuccess(response.data));
        }else{
            yield put(getInvoicesError(response.data));
        }       
    }catch(error){
        yield put(getInvoicesError(error.response.data));
    }
}

export function* handleUpdateInvoice({payload}){
    try{
        const response = yield call(updateInvoice, payload);
        if(response.status === 200){
            yield put(updateInvoiceSuccess(response.data));
        }else{
            yield put(updateInvoiceError(response.data));
        }       
    }catch(error){
        yield put(updateInvoiceError(error.response.data));
    }
}

export function* handleGetInvoice({payload}){
    try{
        const response = yield call(getInvoice, payload);
        if(response.status === 200){
            yield put(getInvoiceSuccess(response.data));
        }else{
            yield put(getInvoiceError(response.data));
        }       
    }catch(error){
        yield put(getInvoiceError(error.response.data));
    }
}