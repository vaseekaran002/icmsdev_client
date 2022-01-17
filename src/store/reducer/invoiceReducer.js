import * as actionTypes from '../actionTypes/invoiceActionTypes';

export const initialState = {
    invoices: [],
    invoice: undefined,
    error: undefined
 };

 
const invoiceReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.GET_INVOICES_SUCCESS:         
            return {
               ...state,
               invoices: action.payload,
               error: undefined
            };
        case actionTypes.GET_INVOICES_ERROR:
            return {
                ...state,
                error: action.payload,
                invoices: undefined
            };
        case actionTypes.UPDATE_INVOICE_SUCCESS:
        case actionTypes.GET_INVOICE_SUCCESS:            
            return {
               ...state,
               invoice: action.payload,
               error: undefined
            };
        case actionTypes.UPDATE_INVOICE_ERROR:
        case actionTypes.GET_INVOICE_ERROR:
            return {
                ...state,
                error: action.payload,
                invoice: undefined
            };
        default:
            return state;
        }
};

export default invoiceReducer;