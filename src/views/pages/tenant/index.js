import * as React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllTenant } from 'store/actions/tenantActions';





const rows = [
    {id: 1, tenantName: "Tenant 1", description: "none" },
    {id: 2, tenantName: "Tenant 2", description: "none" },
    {id: 3, tenantName: "Tenant 3", description: "none" },
    {id: 4, tenantName: "Tenant 4", description: "none" },
];


const useStyles = makeStyles({
    createBtn:{
        display:"flex",
        justifyContent: "end",
        margin: "2rem 2rem 2rem 2rem",
    }
});

export default function DataTable() {


    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stateTenants = useSelector((state)=>state.tenant.tenants)

    React.useEffect(()=>{
        dispatch(getAllTenant());
    },[]);

    React.useEffect(()=>{
        console.log("rows",stateTenants);
    },[stateTenants])

    const columns = [
        { field: "id",identity: true,headerName: "ID",width: 100},
        { field: "name",headerName: "Tenant Name",width: 300},
        { field: "description",headerName: "Description",width: 430},
        { field: "status",headerName: "Status",width: 100},
        { field: "edit",headerName: "Edit",width: 200,
        renderCell: (params)=>{
            return(
                <Button 
                onClick={()=> navigate(`edit-tenant/${params.row.name}`)}
                variant="contained" 
                color="custom">
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
            onClick={(e)=>{navigate("/create-tenant");}}
            variant="contained"
            color="custom"
            >
                <Typography color="#ffffff"> Create Tenant </Typography>
            </Button>
            </div>
        <div style={{ height: 400, width: '100%',backgroundColor: "#ffffff" }}>
        <DataGrid
            rows={stateTenants}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelection={true}
        />
        </div>
    </Container>
  );
}

