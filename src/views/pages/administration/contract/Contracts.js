import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, Tooltip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getContracts } from "store/actions/contractActions";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";

const useStyles = makeStyles({
  tablecelltrucate: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  createBtn: {
    display: "flex",
    justifyContent: "end",
    margin: "2rem 2rem 2rem 2rem",
  },
});

export const ContractDisplay = () => {
  const dispatch = useDispatch();
  const [rows, setRows] = useState();
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getContracts({ musicianId: "MUSIC-45" }));
  }, []);
  const stateContracts = useSelector((state) => state.contract.contracts);

  useEffect(() => {
    console.log(stateContracts);
    setRows(
      stateContracts.map((row) => {
        const { contractId, ...rest } = row;
        return { id: contractId, ...rest };
      })
    );
  }, [stateContracts]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      type: "string",
      renderCell: (params) => (
        <Tooltip title={params.row.contractId}>
          <span className={classes.tablecelltrucate}>
            {params.row.contractId}
          </span>
        </Tooltip>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      renderCell: (params) => (
        <Tooltip title={params.row.title}>
          <span className={classes.tablecelltrucate}>{params.row.title}</span>
        </Tooltip>
      ),
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      renderCell: (params) => (
        <Tooltip title={params.row.description}>
          <span className={classes.tablecelltrucate}>
            {params.row.description}
          </span>
        </Tooltip>
      ),
    },
    {
      field: "staksPayId",
      headerName: "StaksPay Id",
      width: 110,
      renderCell: (params) => (
        <Tooltip title={params.row.staksPayId}>
          <span className={classes.tablecelltrucate}>
            {params.row.staksPayId}
          </span>
        </Tooltip>
      ),
    },
    {
      field: "channelName",
      headerName: "Channel Name",
      width: 200,
      renderCell: (params) => (
        <Tooltip title={params.row.channelName}>
          <span className={classes.tablecelltrucate}>
            {params.row.channelName}
          </span>
        </Tooltip>
      ),
    },
    {
      field: "city",
      headerName: "City",
      width: 110,
      renderCell: (params) => (
        <Tooltip title={params.row.city}>
          <span className={classes.tablecelltrucate}>{params.row.city}</span>
        </Tooltip>
      ),
    },
    {
      field: "fees",
      headerName: "Fees",
      width: 110,
      renderCell: (params) => (
        <Tooltip title={params.row.fees}>
          <span className={classes.tablecelltrucate}>{params.row.fees}</span>
        </Tooltip>
      ),
    },
    {
      field: "timeZone",
      headerName: "Time Zone",
      width: 110,
      renderCell: (params) => (
        <Tooltip title={params.row.timeZone}>
          <span className={classes.tablecelltrucate}>
            {params.row.timeZone}
          </span>
        </Tooltip>
      ),
    },
    {
      field: "venue",
      headerName: "Venue",
      width: 110,
      renderCell: (params) => (
        <Tooltip title={params.row.venue}>
          <span className={classes.tablecelltrucate}>{params.row.venue}</span>
        </Tooltip>
      ),
    },

    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => {
        return (
          <Button
            onClick={() =>
              navigate(`edit-contracts/${params.row.contractId}`, {
                replace: false,
              })
            }
            variant="contained"
            color="custom"
          >
            <Typography color="#ffffff">edit</Typography>
          </Button>
        );
      },
    },
  ];

  return (
    <Container>
      <div className={classes.createBtn}>
        <Button
          onClick={(e) => {
            navigate("/create-contract");
          }}
          variant="contained"
          color="custom"
        >
          <Typography color="#ffffff"> Create Tenant </Typography>
        </Button>
      </div>
      <div
        style={{
          height: 400,
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <DataGrid
          rows={stateContracts}
          getRowId={(r) => r.contractId}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Container>
  );
};

export default ContractDisplay;
