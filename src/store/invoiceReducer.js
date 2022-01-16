import * as actionTypes from './actions/invoiceActions';

export const getInvoices = (invoice) => ({
    type: actionTypes.GET_INVOICES,
    payload: invoice
});

export const getInvoicesSuccess = (invoices) => ({
    type: actionTypes.GET_INVOICES_SUCCESS,
    payload: invoices
});

export const getInvoicesError = (error) => ({
    type: actionTypes.GET_INVOICES_ERROR,
    payload: error
});

export const updateInvoice = (invoice) => ({
    type: actionTypes.UPDATE_INVOICE,
    payload: invoice
});

export const updateMusicianSuccess = (invoice) => ({
    type: actionTypes.UPDATE_INVOICE_SUCCESS,
    payload: invoice
});

export const updateMusicianError = (error) => ({
    type: actionTypes.UPDATE_INVOICE_ERROR,
    payload: error
});

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
            return {
               ...state,
               invoice: action.payload,
               error: undefined
            };
        case actionTypes.UPDATE_INVOICE_ERROR:
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