import React from 'react';
import PropTypes from 'prop-types';

import Administartion from './administration';
import Contracts from './contracts';
import Invoices from './invoice';

import { Divider, Typography } from '@mui/material';


const Body = ({administration, members, contracts, invoices}) => {
    return (
        <>
          <Administartion administration={administration} members={members}/>
          <Divider />
          <Contracts contracts={contracts} />
          <Divider />
          <Invoices invoices={invoices}/>
        </>
    );
}

Body.propTypes = {
  administration: PropTypes.object,
  members: PropTypes.array,
  contracts: PropTypes.array,
  invoices: PropTypes.array
};

export default Body;