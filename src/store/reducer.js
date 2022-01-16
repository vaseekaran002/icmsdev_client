import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import userReducer from './userReducer';
import musicianReducer from './musicianReducer';
import contractReducer from './contractReducer';
import invoiceReducer from './invoiceReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    user: userReducer,
    musician: musicianReducer,
    contract: contractReducer,
    invoice: invoiceReducer
});

export default reducer;
