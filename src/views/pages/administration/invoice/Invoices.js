import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, Typography, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from "store/actions/invoiceActions";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";
const useStyles = makeStyles({
  createBtn: {
    display: "flex",
    justifyContent: "end",
    margin: "2rem 2rem 2rem 2rem",
  },
});

export default function DataTable() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allInvoices = useSelector((state) => state.invoice.invoices);
  const [loading, setLoading] = React.useState(true);
  const override = css`
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: 48%;
    margin-top: 12%;
  `;
  React.useEffect(() => {
    console.log("rows", allInvoices);
  }, [allInvoices]);

  React.useEffect(() => {
    dispatch(getInvoices({ musicianId: "MUSIC-45" }));
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      type: "string",
      renderCell: (params) => (
        <Tooltip title={params.row.invoiceId}>
          <span className={classes.tablecelltrucate}>
            {params.row.invoiceId}
          </span>
        </Tooltip>
      ),
      sortComparator: (v1, v2, param1, param2) => {
        const a = param1.id.split("-")[1];
        const b = param2.id.split("-")[1];
        return a - b;
      },
    },
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
      type: "string",
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
      width: 130,
      type: "string",
      renderCell: (params) => (
        <Tooltip title={params.row.contractId}>
          <span className={classes.tablecelltrucate}>
            {params.row.contractId}
          </span>
        </Tooltip>
      ),
    },
    // { field: "description",headerName: " Description",width: 300,type: "string",
    // renderCell: (params) => (
    //   <Tooltip title={params.row.description}>
    //     <span className={classes.tablecelltrucate}>
    //       {params.row.description}
    //     </span>
    //   </Tooltip>
    // ),
    // },
    {
      field: "dueDate",
      headerName: "Due Date",
      width: 130,
      type: "string",
      renderCell: (params) => (
        <Tooltip title={params.row.dueDate}>
          <span className={classes.tablecelltrucate}>{params.row.dueDate}</span>
        </Tooltip>
      ),
    },
    // {
    //   field: "title",
    //   headerName: "Title",
    //   width: 150,
    //   type: "string",
    //   renderCell: (params) => (
    //     <Tooltip title={params.row.title}>
    //       <span className={classes.tablecelltrucate}>{params.row.title}</span>
    //     </Tooltip>
    //   ),
    // },
    {
      field: "totalFeesDue",
      headerName: "Fees Due",
      width: 130,
      type: "string",
      renderCell: (params) => (
        <Tooltip title={params.row.totalFeesDue}>
          <span className={classes.tablecelltrucate}>
            {params.row.totalFeesDue}
          </span>
        </Tooltip>
      ),
    },
    {
      field: "edit",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <Button
            onClick={() => navigate(`edit-invoice/${params.row.invoiceId}`)}
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
            navigate("/create-invoice");
          }}
          variant="contained"
          color="custom"
        >
          <Typography color="#ffffff"> Create Invoice </Typography>
        </Button>
      </div>
      <div style={{ height: 400, width: "100%", backgroundColor: "#ffffff" }}>
        <DataGrid
          rows={allInvoices}
          getRowId={(r) => r.invoiceId}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelection={true}
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
}
