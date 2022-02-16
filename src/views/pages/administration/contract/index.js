import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Divider,
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
  Container,
} from "@mui/material";
import { gridSpacing } from "store/constant";
import MuiTypography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { getContracts } from "store/actions/contractActions";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
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

const Contracts = ({ contracts }) => {
  const header = ["Date", "Contract Details", ""];
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [contractRows, setContractRows] = useState([]);
  const override = css`
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: 48%;
    margin-top: 12%;
  `;
  const rows = useSelector((state) => state.contract.contracts);

  useEffect(() => {
    dispatch(getContracts({ musicianId: "MUSIC-45" }));
  }, []);

  useEffect(() => {
    if (rows != null) {
      const arr = rows.slice(0, 3);
      setContractRows(arr);
    }
  }, [rows]);

  useEffect(() => {
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
      field: "description",
      headerName: "Description",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.description}>
          <span className={classes.tablecelltrucate}>
            {params.row.description}
          </span>
        </Tooltip>
      ),
    },

    {
      field: "city",
      headerName: "City",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.city}>
          <span className={classes.tablecelltrucate}>{params.row.city}</span>
        </Tooltip>
      ),
    },
    {
      field: "fees",
      headerName: "Fees",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.fees}>
          <span className={classes.tablecelltrucate}>{params.row.fees}</span>
        </Tooltip>
      ),
    },

    {
      field: "venue",
      headerName: "Venue",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.venue}>
          <span className={classes.tablecelltrucate}>{params.row.venue}</span>
        </Tooltip>
      ),
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <Button
            onClick={() =>
              navigate(`/contracts/view-contracts/${params.row.contractId}`, {
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
    <div className="contract-section section">
      <div className={classes.header}>
        <div className={classes.header}>
          <MuiTypography paddingTop="9px" variant="h4" gutterBottom>
            Contracts
          </MuiTypography>
          <IconButton
            onClick={() => {
              navigate("/create-contract");
            }}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </IconButton>
        </div>
        <Button
          style={{ marginRight: "6%" }}
          onClick={() => {
            navigate("/contracts");
          }}
          color="primary"
        >
          All Contracts
        </Button>
      </div>
      {/* <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={12}> */}
      <div className={classes.grid}>
        <DataGrid
          hideFooter
          rows={contractRows}
          getRowId={(r) => r.contractId}
          columns={columns}
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

Contracts.propTypes = {
  contracts: PropTypes.array,
};

export default Contracts;
