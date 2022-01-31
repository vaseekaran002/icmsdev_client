import * as React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Button, Container, Typography,Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from 'store/actions/invoiceActions';



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
      },
        { field: "channelName",headerName: "Channel Name",width:200,type: "string",
        renderCell: (params) => (
          <Tooltip title={params.row.channelName}>
            <span className={classes.tablecelltrucate}>
              {params.row.channelName}
            </span>
          </Tooltip>
        ),
        },
        { field: "contractDescription",headerName: " Contract Description",width: 250,type: "string",
        renderCell: (params) => (
          <Tooltip title={params.row.contractDescription}>
            <span className={classes.tablecelltrucate}>
              {params.row.contractDescription}
            </span>
          </Tooltip>
        ),
        },
        { field: "contractId",headerName: "Contract Id",width: 100,type: "string",
        renderCell: (params) => (
          <Tooltip title={params.row.contractId}>
            <span className={classes.tablecelltrucate}>
              {params.row.contractId}
            </span>
          </Tooltip>
        ),
        },
        { field: "description",headerName: " Description",width: 300,type: "string",
        renderCell: (params) => (
          <Tooltip title={params.row.description}>
            <span className={classes.tablecelltrucate}>
              {params.row.description}
            </span>
          </Tooltip>
        ),
        },
        { field: "dueDate",headerName: "Due Date",width: 100,type: "string",
        renderCell: (params) => (
          <Tooltip title={params.row.dueDate}>
            <span className={classes.tablecelltrucate}>
              {params.row.dueDate}
            </span>
          </Tooltip>
        ),
        },
        { field: "title",headerName: "Title",width: 150,type: "string",
        renderCell: (params) => (
          <Tooltip title={params.row.title}>
            <span className={classes.tablecelltrucate}>
              {params.row.title}
            </span>
          </Tooltip>
        ),
        },
        { field: "totalFeesDue",headerName: "Fees Due",width: 100,type: "string",
        renderCell: (params) => (
          <Tooltip title={params.row.totalFeesDue}>
            <span className={classes.tablecelltrucate}>
              {params.row.totalFeesDue}
            </span>
          </Tooltip>
        ),
        },
        { field: "edit",headerName: "Edit",width: 200,
        renderCell: (params)=>{
            return(
                <Button 
                onClick={()=> navigate(`edit-invoice/${params.row.invoiceId}`)}
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
            rows={allInvoices}
            getRowId={(r) => r.invoiceId}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelection={true}
        />
        </div>
    </Container>
  );
}

