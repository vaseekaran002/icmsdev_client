import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { Button, Grid,IconButton } from '@mui/material';
import { gridSpacing } from 'store/constant';
import MuiTypography from '@mui/material/Typography';
import { useNavigate } from "react-router";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Invoices = ({invoices}) => {

    const header = ['Date', 'Invoice To', 'Status', ''];
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <div className="invoice-section section">
          <div className={classes.header}>
          <div className={classes.header}>
          <MuiTypography variant="h4" gutterBottom>
            Invoices 
            <IconButton
            onClick={() => {
              navigate("/create-invoice");
            }}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </IconButton>
          </MuiTypography>
          </div>
          <Button
          onClick={()=>{
            navigate("/invoices")}}
            >
            All Invoices
          </Button>
          </div>
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
                          <td>
                              <Button 
                              onClick={()=>{navigate(`/view-invoice/${item.id}`)}}
                              >
                              View
                              </Button>
                          </td>
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