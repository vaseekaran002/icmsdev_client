import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './reducer/customizationReducer';
import userReducer from './reducer/userReducer';
import musicianReducer from './reducer/musicianReducer';
import contractReducer from './reducer/contractReducer';
import invoiceReducer from './reducer/invoiceReducer';
import roleReducer from './reducer/roleReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    user: userReducer,
    musician: musicianReducer,
    contract: contractReducer,
    invoice: invoiceReducer,
    role : roleReducer
});

export default reducer;
