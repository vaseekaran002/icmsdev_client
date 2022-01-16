import axios from 'axios';

export const getInvoices = async (invoice) => {
    console.log(invoice);
    return await axios.get("http://18.205.56.216:90/api/musician/"+invoice.musicianId+"/invoices");
}

export const updateInvoice = async (invoice) => {
    console.log(invoice);
    return await axios.post("http://18.205.56.216:90/api/invoice", invoice);
}