import React, { useState } from "react";
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
  Tooltip,
  Typography,
} from "@mui/material";
import { gridSpacing } from "store/constant";
import MuiTypography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
import { getInvoices } from "store/actions/invoiceActions";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import { DataGrid } from "@mui/x-data-grid";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  grid: {
    width: "100%",
    backgroundColor: "#ffffff",
    marginTop: "1%",
    height: 300,
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
  const [loading, setLoading] = useState(true);
  const [invoiceRows, setInvoiceRows] = useState([]);
  const override = css`
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: 48%;
    margin-top: 12%;
  `;

  const rows = useSelector((state) => state.invoice.invoices);

  useEffect(() => {
    dispatch(getInvoices({ musicianId: "MUSIC-45" }));
  }, []);

  useEffect(() => {
    if (rows != null) {
      const arr = rows.slice(0, 3);
      setInvoiceRows(arr);
    }
    if (rows != null && rows.length > 0) {
      setLoading(false);
    }
  }, [rows]);

  const columns = [
    {
      field: "channelName",
      headerName: "Channel Name",
      width: 200,
      type: "string",
      renderCell: (params) => (
        <Tooltip title={params.row.channelName}>
          <span className={classes.tablecelltrucate}>
            {params.row.channelName}
          </span>
        </Tooltip>
      ),
    },

    {
      field: "contractDescription",
      headerName: "Description",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.contractDescription}>
          <span className={classes.tablecelltrucate}>
            {params.row.contractDescription}
          </span>
        </Tooltip>
      ),
    },

    {
      field: "contractId",
      headerName: "Contract Id",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.contractId}>
          <span className={classes.tablecelltrucate}>
            {params.row.contractId}
          </span>
        </Tooltip>
      ),
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.dueDate}>
          <span className={classes.tablecelltrucate}>{params.row.dueDate}</span>
        </Tooltip>
      ),
    },

    {
      field: "totalFeesDue",
      headerName: "Fees Due",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.totalFeesDue}>
          <span className={classes.tablecelltrucate}>
            {params.row.totalFeesDue}
          </span>
        </Tooltip>
      ),
    },

    {
      field: "action",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <Button
            onClick={() =>
              navigate(`/view-invoice/${params.row.invoiceId}`, {
                replace: false,
              })
            }
            color="primary"
          >
            View
          </Button>
        );
      },
    },
  ];

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
          style={{ marginRight: "6%" }}
          onClick={() => {
            navigate("/invoices");
          }}
        >
          All Invoices
        </Button>
      </div>
      <div className={classes.grid}>
        <DataGrid
          hideFooter
          rows={invoiceRows}
          getRowId={(r) => r.invoiceId}
          columns={columns}
          rowsPerPageOptions={[]}
          components={{
            NoRowsOverlay: () => (
              <ClipLoader
                color={"23C860"}
                loading={loading}
                css={override}
                size={30}
              />
            ),
          }}
        />
      </div>
    </div>
  );
};

Invoices.propTypes = {
  invoices: PropTypes.array,
};
export default Invoices;
