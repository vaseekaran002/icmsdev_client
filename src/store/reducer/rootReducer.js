import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import userReducer from './userReducer';
import musicianReducer from './musicianReducer';
import contractReducer from './contractReducer';
import invoiceReducer from './invoiceReducer';
import roleReducer from './roleReducer';
import tenantReducer from './tenantReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
    customization: customizationReducer,
    user: userReducer,
    musician: musicianReducer,
    contract: contractReducer,
    invoice: invoiceReducer,
    role : roleReducer,
    tenant : tenantReducer
});

export default rootReducer;
