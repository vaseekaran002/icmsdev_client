import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { gridSpacing } from "store/constant";
import MuiTypography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
import { getInvoices } from "store/actions/invoiceActions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Invoices = ({ invoices }) => {
  const header = [
    "Channel Name",
    "Description",
    "Contract Id",
    "Due Date",
    "Fees Due",
    "",
  ];
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInvoices({ musicianId: "MUSIC-45" }));
  }, []);
  const rows = useSelector((state) => state.invoice.invoices);
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
          onClick={() => {
            navigate("/invoices");
          }}
        >
          All Invoices
        </Button>
      </div>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {header &&
                    header.length > 0 &&
                    header.map((item) => <TableCell>{item}</TableCell>)}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => {
                  if (i < 3) {
                    return (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.channelName}
                        </TableCell>
                        <TableCell>{row.contractDescription}</TableCell>
                        <TableCell>{row.contractId}</TableCell>
                        <TableCell>{row.dueDate}</TableCell>
                        <TableCell>{row.totalFeesDue}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => {
                              navigate(`/view-invoice/${row.invoiceId}`);
                            }}
                            color="primary"
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Table responsive>
            <thead>
              {header &&
                header.length > 0 &&
                header.map((item) => <th>{item}</th>)}
            </thead>
            <tbody>
              {invoices &&
                invoices.length > 0 &&
                invoices.map((item) => {
                  return (
                    <tr>
                      <td>{item.invoiceDate}</td>
                      <td>{item.invoiceTo}</td>
                      <td>{item.status}</td>
                      <td>
                        <Button
                          onClick={() => {
                            navigate(`/view-invoice/${item.id}`);
                          }}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table> */}
        </Grid>
      </Grid>
    </div>
  );
};

Invoices.propTypes = {
  invoices: PropTypes.array,
};
export default Invoices;
