import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, Tooltip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { getContracts } from "store/actions/contractActions";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";

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
  const [rows, setRows] = useState();
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const stateContracts = useSelector((state) => state.contract.contracts);

  const [loading, setLoading] = useState(true);

  const override = css`
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: 48%;
    margin-top: 12%;
  `;

  useEffect(() => {
    console.log(stateContracts);
    setRows(
      stateContracts.map((row) => {
        const { contractId, ...rest } = row;
        return { id: contractId, ...rest };
      })
    );
  }, [stateContracts]);

  useEffect(() => {
    dispatch(getContracts({ musicianId: "MUSIC-45" }));
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 110,
      type: "string",
      renderCell: (params) => (
        <Tooltip title={params.row.contractId}>
          <span className={classes.tablecelltrucate}>
            {params.row.contractId}
          </span>
        </Tooltip>
      ),
      sortComparator: (v1, v2, param1, param2) => {
        const a = param1.id.split("-")[1];
        const b = param2.id.split("-")[1];
        return a - b;
      },
    },
    // {
    //   field: "title",
    //   headerName: "Title",
    //   width: 150,
    //   renderCell: (params) => (
    //     <Tooltip title={params.row.title}>
    //       <span className={classes.tablecelltrucate}>{params.row.title}</span>
    //     </Tooltip>
    //   ),
    // },
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
    // {
    //   field: "staksPayId",
    //   headerName: "StaksPay Id",
    //   width: 110,
    //   renderCell: (params) => (
    //     <Tooltip title={params.row.staksPayId}>
    //       <span className={classes.tablecelltrucate}>
    //         {params.row.staksPayId}
    //       </span>
    //     </Tooltip>
    //   ),
    // },
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
      width: 150,
      renderCell: (params) => (
        <Tooltip title={params.row.city}>
          <span className={classes.tablecelltrucate}>{params.row.city}</span>
        </Tooltip>
      ),
    },
    {
      field: "fees",
      headerName: "Fees",
      width: 150,
      renderCell: (params) => (
        <Tooltip title={params.row.fees}>
          <span className={classes.tablecelltrucate}>{params.row.fees}</span>
        </Tooltip>
      ),
    },
    // {
    //   field: "timeZone",
    //   headerName: "Time Zone",
    //   width: 110,
    //   renderCell: (params) => (
    //     <Tooltip title={params.row.timeZone}>
    //       <span className={classes.tablecelltrucate}>
    //         {params.row.timeZone}
    //       </span>
    //     </Tooltip>
    //   ),
    // },
    {
      field: "venue",
      headerName: "Venue",
      width: 150,
      renderCell: (params) => (
        <Tooltip title={params.row.venue}>
          <span className={classes.tablecelltrucate}>{params.row.venue}</span>
        </Tooltip>
      ),
    },

    {
      field: "edit",
      headerName: "Actions",
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
          <Typography color="#ffffff"> Create Contract </Typography>
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
    </Container>
  );
};

export default ContractDisplay;
