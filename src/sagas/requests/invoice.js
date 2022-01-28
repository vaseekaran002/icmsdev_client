import axios from 'axios';
import { environment } from 'environment';

export const getInvoices = async (invoice) => {
    console.log(invoice);
    return await axios.get(`${environment.api_url}/musician/${invoice.musicianId}/invoices`);
}

export const updateInvoice = async (invoice) => {
    console.log(invoice);
    return await axios.post(`${environment.api_url}/musician/MUSIC-45/invoice`, invoice);
}

export const getInvoice = async (invoice) => {
    console.log(invoice);
    return await axios.get(`${environment.api_url}/invoice/${invoice.invoiceId}`);
}