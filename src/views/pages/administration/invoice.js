import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import MuiTypography from '@mui/material/Typography';

const Invoices = ({invoices}) => {

    const header = ['Date', 'Invoice To', 'Status', ''];

    return (
        <div className="invoice-section section">
          <MuiTypography variant="h4" gutterBottom>
            Invoices
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
                  {invoices && invoices.length > 0 && 
                    invoices.map(item => {
                      return (
                        <tr>
                          <td>{item.invoiceDate}</td>
                          <td>{item.invoiceTo}</td>
                          <td>{item.status}</td>
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

Invoices.propTypes = {
  invoices: PropTypes.array
};
export default Invoices;