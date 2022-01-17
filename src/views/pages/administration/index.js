import React from 'react';
import { useSelector } from 'react-redux';

import Body from './body';
import MainCard from 'ui-component/cards/MainCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const administration = {
    "radaptiveId" : "MUSIC-10",
    "staksPayId" : "011889",
    "userName" : "jeverson",
    "artistName" : "Jeverson",
    "facebookLink" : "https://www.facebook.com/jeversonramirez",
    "hometown" : "MISSISSAUGA",
    "genres" : "Jeverson"
};

const members = [{
    "radaptiveId" : "MUSIC-25",
    "staksPayId" : "1001",
    "userName" : "Raja",
    "artistName" : "Raja Ram ",
    "facebookLink" : "ilayaraja/fb.com",
    "streetAddress" : null,
    "hometown" : "CA",
    "city" : null,
    "state" : null,
    "genres" : "null",
    "emailAddress" : null
  },
  {
    "radaptiveId" : "MUSIC-26",
    "staksPayId" : "1001",
    "userName" : "Raja",
    "artistName" : "Raja Vasee ",
    "facebookLink" : "ilayaraja/fb.com",
    "streetAddress" : null,
    "hometown" : "CA",
    "city" : null,
    "state" : null,
    "genres" : "null",
    "emailAddress" : null
  }];

const contracts = [
    {
        "title": "Celebration Square",
        "contractDescription": "Celebration Square",
        "dateOfContract": "02/12/2022 02:02:22",
        "city": null,
        "state": null,
        "zip": null,
        "timeZone": "EST",
        "venue": "Mississuga",
        "fees": "123",
        "channelName": "Celebration Square",
        "contractDate" :""
    },
    {
        "radaptiveId":"CONT-24",
        "title": "Celebration Square",
        "contractDescription": "Celebration Square",
        "dateOfContract": "02/12/2022 02:02:22",
        "city": null,
        "state": null,
        "zip": null,
        "timeZone": "EST",
        "venue": "Mississuga",
        "fees": "123",
        "channelName": "Celebration Square",
        "contractDate" :""
    }		
];

const invoices = [
    {
     "radaptiveId":"INVOC-23",
     "invoiceDate":  "02/12/2022 02:02:22",
     "invoiceTo":  "Ram",
     "status": "Paid"
    },
    {
     "radaptiveId":"INVOC-24",
     "invoiceDate":  "02/12/2022 02:02:22",
     "invoiceTo":  "Ram Ganesh",
     "status": "Pending"
    }		
];

const Index = () => {
    /*const invoices = useSelector((state) => state.invoice.invoices);
    const contracts = useSelector((state) => state.contract.contracts);
    const members = useSelector((state) => state.musician.musicians);
    */
    return (
        <MainCard>
            <Body 
                administration={administration}
                members={members}
                contracts={contracts}
                invoices={invoices}
            />
        </MainCard>
    )
};

export default Index;