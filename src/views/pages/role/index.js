import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllRole } from "store/actions/roleActions";

const columns = [
  {
    field: "id",
    identity: true,
    headerName: "ID",
    width: 100,
  },
  { field: "name", headerName: "Role name", width: 300 },
  { field: "description", headerName: "Description", width: 430 },
  { field: "status", headerName: "Status", width: 100 },
  {
    field: "edit",
    headerName: "Edit",
    width: 200,
    renderCell: (params) => {
      return (
        <Button variant="contained" color="custom">
          <Typography color="#ffffff">edit</Typography>
        </Button>
      );
    },
  },
];

const useStyles = makeStyles({
  creatBtn: {
    display: "flex",
    justifyContent: "end",
    margin: "2rem 2rem 2rem 2rem",
  },
});

const rows = [
  { id: 1, roleName: "USER", description: "none" },
  { id: 2, roleName: "TENANT_ADMIN", description: "none" },
  { id: 3, roleName: "SUPER_ADMIN", description: "none" },
  { id: 4, roleName: "PAGE_ADMIN", description: "none" },
];

export default function DataTable() {
  const classes = useStyles();
  const navigate = useNavigate();
  const stateRoles = useSelector((state) => state.role.roles);
  const dispatch = useDispatch();
  const [roles, setRoles] = React.useState([]);
  React.useEffect(() => {
    dispatch(getAllRole());
  }, []);

  React.useEffect(() => {
    dispatch(getAllRole());
  }, [stateRoles]);
  return (
    <Container>
      <div className={classes.creatBtn}>
        <Button
          onClick={(e) => {
            navigate("/create-role");
          }}
          variant="contained"
          color="custom"
        >
          <Typography color="#ffffff">Create Role</Typography>
        </Button>
      </div>
      <div style={{ height: 400, width: "100%", backgroundColor: "#ffffff" }}>
        <DataGrid
          rows={stateRoles || rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Container>
  );
}
