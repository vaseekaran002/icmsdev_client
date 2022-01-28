import * as React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from 'store/actions/invoiceActions';





const rows = [
    {id:"1",invoiceId: 1, channelName:"tenant", title: "Tenant 1", contractDescription: "none",totalFeesDue: "1000", dueDate: "16/07/2022",contractId: "12" },
    {id:"2",invoiceId: 2, channelName:"tenant", title: "Tenant 1", contractDescription: "none",totalFeesDue: "1000", dueDate: "16/07/2022",contractId: "12" },
    {id:"3",invoiceId: 3, channelName:"tenant", title: "Tenant 1", contractDescription: "none",totalFeesDue: "1000", dueDate: "16/07/2022",contractId: "12" },
    {id:"4",invoiceId: 4, channelName:"tenant", title: "Tenant 1", contractDescription: "none",totalFeesDue: "1000", dueDate: "16/07/2022",contractId: "12" },
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
    const allInvoices = useSelector((state)=>state.invoice.invoices)

    React.useEffect(()=>{
        dispatch(getInvoices({ musicianId: "MUSIC-45" }));
    },[]);
    
    React.useEffect(()=>{
        console.log("rows",allInvoices);
    },[allInvoices])

    const columns = [
        { field: "invoiceId",identity: true,headerName: "ID",width: 100},
        {field: "channelName",headerName: "Channel Name",width:400},
        { field: "title",headerName: "Title",width: 300},
        { field: "contractDescription",headerName: " Contract Description",width: 430},
        { field: "totalFeesDue",headerName: "Fees Due",width: 100},
        { field: "dueDate",headerName: "Due Date",width: 100},
        { field: "contractId",headerName: "Contract Id",width: 100},
        { field: "edit",headerName: "Edit",width: 200,
        renderCell: (params)=>{
            return(
                <Button 
                // onClick={()=> navigate(`edit-tenant/${params.row.name}`)}
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
            onClick={(e)=>{navigate("/create-invoice");}}
            variant="contained"
            color="custom"
            >
                <Typography color="#ffffff"> Create Invoice </Typography>
            </Button>
            </div>
        <div style={{ height: 400, width: '100%',backgroundColor: "#ffffff" }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelection={true}
        />
        </div>
    </Container>
  );
}

