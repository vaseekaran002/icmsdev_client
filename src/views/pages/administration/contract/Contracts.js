import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getContracts } from "store/actions/contractActions";

const columns = [
  { field: "contractId", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
  },
  {
    field: "channelName",
    headerName: "Channel Name",
    width: 200,
  },
  {
    field: "city",
    headerName: "City",
    width: 110,
  },
  {
    field: "fees",
    headerName: "Fees",
    width: 110,
  },
  {
    field: "timeZone",
    headerName: "Time Zone",
    width: 110,
  },
  {
    field: "venue",
    headerName: "Venue",
    width: 110,
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 100,
    renderCell: (params) => {
      return (
        <Button
          // onClick={() =>
          //   navigate(`edit-metadata/${params.row.componentName}`)
          // }
          variant="contained"
          color="custom"
        >
          <Typography color="#ffffff">edit</Typography>
        </Button>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
export const ContractDisplay = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContracts({ musicianId: "MUSIC-45" }));
  }, []);
  const stateContracts = useSelector((state) => state.contract.contracts);

  useEffect(() => {
    console.log(stateContracts);
  }, [stateContracts]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default ContractDisplay;
