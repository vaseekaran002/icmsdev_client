import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
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
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { getContracts } from "store/actions/contractActions";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

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
  const dispatch = useDispatch();
  const [loading,setLoading] =useState(true);
  const override = css`
  text-align:center;
  justify-content:center;
  align-items: center;
  margin-left:50%;
`;

  useEffect(() => {
    dispatch(getContracts({ musicianId: "MUSIC-45" }));
  }, []);

  const rows = useSelector((state) => state.contract.contracts);
  console.log(rows);
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Channel Name </TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Fees</TableCell>
                  <TableCell>Venue</TableCell>
                </TableRow>
              </TableHead>
                  <TableBody>
                {rows.map((row, i) => {
                  if (i < 3) {
                    setLoading(false);
                    return (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.channelName}
                        </TableCell>
                        <TableCell>{row.description} </TableCell>
                        <TableCell>{row.city}</TableCell>
                        <TableCell>{row.fees}</TableCell>
                        <TableCell>{row.venue}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => {
                              navigate(
                                `/contracts/view-contracts/${row.contractId}`
                              );
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
            <ClipLoader color={"23C860"}  loading={loading} css={override} size={20} />
          </TableContainer>
          {/* <Table responsive>
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

Contracts.propTypes = {
  contracts: PropTypes.array,
};

export default Contracts;
