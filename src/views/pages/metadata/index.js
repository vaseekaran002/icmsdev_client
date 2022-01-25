import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllMetadata } from "../../../store/actions/metadataActions";
const useStyles = makeStyles({
  creatBtn: {
    display: "flex",
    justifyContent: "end",
    margin: "2rem 2rem 2rem 2rem",
  },
});

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

export default function DataTable() {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const metadatas = useSelector((state) => state.metadata.metadatas);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "componentName", headerName: "Component Name", width: 230 },
    { field: "componentOrder", headerName: "Order", width: 130 },
    {
      field: "displayName",
      headerName: "Display Name",
      width: 200,
    },
    { field: "status", headerName: "Status", width: 150 },

    {
      field: "roles",
      headerName: "Roles",
      width: 200,
      renderCell: (params) => {
        const { row } = params;
        const { roles } = row;
        let str = "";
        roles.map((item, i) => {
          if (i + 1 != roles.length) {
            str = str.concat(item.name, ",");
          } else {
            str = str.concat(item.name);
          }
        });
        return str;
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 200,
      renderCell: (params) => {
        return (
          <Button
            onClick={() =>
              navigate(`edit-metadata/${params.row.componentName}`)
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

  React.useEffect(() => {
    dispatch(getAllMetadata());
  }, []);

  React.useEffect(() => {
    console.log("state", metadatas);
  }, [metadatas]);

  return (
    <Container>
      <div className={classes.creatBtn}>
        <Button
          onClick={(e) => {
            navigate("/create-metadata");
          }}
          variant="contained"
          color="custom"
        >
          <Typography color="#ffffff">Create Metadata</Typography>
        </Button>
      </div>
      <div style={{ height: 400, width: "100%", backgroundColor: "#ffffff" }}>
        <DataGrid
          rows={metadatas || rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Container>
  );
}
