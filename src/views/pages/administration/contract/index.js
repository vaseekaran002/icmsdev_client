import React, { useState } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, IconButton } from "@mui/material";
import { gridSpacing } from "store/constant";
import MuiTypography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Contracts = ({ contracts }) => {
  const header = ["Date", "Contract Details", ""];
  const navigate = useNavigate();
  const classes = useStyles();
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
          onClick={() => {
            navigate("/contracts");
          }}
          color="primary"
        >
          All Contracts
        </Button>
      </div>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={12}>
          <Table responsive>
            <thead>
              {header &&
                header.length > 0 &&
                header.map((item) => <th>{item}</th>)}
            </thead>
            <tbody>
              {contracts &&
                contracts.length > 0 &&
                contracts.map((item) => {
                  return (
                    <tr>
                      <td>{item.dateOfContract}</td>
                      <td>{item.contractDescription}</td>
                      <td>
                        <Button
                          onClick={() => {
                            navigate(`/view-contracts/${item.id}`);
                          }}
                          color="primary"
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
};

Contracts.propTypes = {
  contracts: PropTypes.array,
};

export default Contracts;
