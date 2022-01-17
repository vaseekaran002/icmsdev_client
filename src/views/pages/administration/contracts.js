import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import MuiTypography from '@mui/material/Typography';

const Contracts = ({contracts}) => {

    const header = ['Date', 'Contract Details', ''];
    
    return (
        <div className="contract-section section">
          <MuiTypography variant="h4" gutterBottom>
            Contracts
          </MuiTypography>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12}>
              <Table responsive>
                <thead>
                  {header && header.length > 0 && 
                    header.map(item => <th>{item}</th>)
                  }
                </thead>
                <tbody>
                  {contracts && contracts.length > 0 && 
                    contracts.map(item => {
                      return (
                        <tr>
                          <td>{item.dateOfContract}</td>
                          <td>{item.contractDescription}</td>
                          <td><a href="">View</a></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            </Grid>
          </Grid>
        </div>
    );
}

Contracts.propTypes = {
  contracts: PropTypes.array
};

export default Contracts;