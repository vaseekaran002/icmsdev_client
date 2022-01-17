import * as actionTypes from '../actionTypes/invoiceActionTypes';

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

export const getInvoice = (invoice) => ({
    type: actionTypes.GET_INVOICE,
    payload: invoice
});

export const getInvoiceSuccess = (invoice) => ({
    type: actionTypes.GET_INVOICE_SUCCESS,
    payload: invoice
});

export const getInvoiceError = (error) => ({
    type: actionTypes.GET_INVOICE_ERROR,
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