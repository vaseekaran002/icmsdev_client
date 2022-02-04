import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  OutlinedInput,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Formik, Field, Form } from "formik";
import { useTheme } from "@emotion/react";
import AnimateButton from "ui-component/extended/AnimateButton";
import { updateInvoice } from "store/actions/invoiceActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
const useStyles = makeStyles({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    boxShadow: "2px 3px 17px -5px rgba(22,138,21,0.65)",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "20px",
  },
  options: {
    display: "flex",
    flexDirection: "column",
  },
  form: {
    "&&": {
      padding: "0px 0px 0px 0px",
    },
  },
});

const ViewInvoice = () => {
  const theme = useTheme();
  const location = useLocation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(true);
  const [editInvoice, setEditInvoice] = useState();
  const { id } = useParams();
  const invoice = useSelector((state) => state.invoice.invoices);

  const validation = Yup.object({
    contractId: Yup.string().required("Contract Id required"),
    totalFeesDue: Yup.string().required("Total Fees Due required"),
    dueDate: Yup.string().required("Due Date required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(updateInvoice(values));
    if (invoice) {
      navigate("/invoices");
    }
  };

  React.useEffect(() => {
    console.log("Hello");
    console.log(invoice);
    setEditInvoice(invoice.filter((item) => item.invoiceId === id));
    if (location.pathname.includes("edit")) {
      setIsEdit(false);
    }
  }, []);

  return (
    <Container className={classes.container}>
      <Grid sm={9} md={5} className={classes.box} container spacing={1}>
        <Grid item>
          <Typography variant="h3">Create Invoice</Typography>
        </Grid>
        {editInvoice && (
          <Grid className={classes.form} item>
            <Formik
              initialValues={{
                invoiceId: editInvoice[0].invoiceId,
                contractId: editInvoice[0].contractId,
                channelName: editInvoice[0].channelName,
                title: editInvoice[0].title,
                description: editInvoice[0].description,
                totalFeesDue: editInvoice[0].totalFeesDue,
                contractDescription: editInvoice[0].contractDescription,
                dueDate: editInvoice[0].dueDate,
              }}
              validationSchema={validation}
              onSubmit={handleSubmit}
            >
              <Form>
                <Field name="channelName">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <FormControl
                        fullWidth
                        sx={{ ...theme.typography.customInput }}
                      >
                        <InputLabel>Channel Name</InputLabel>
                        <OutlinedInput
                          disabled={isEdit}
                          fullWidth
                          {...field}
                        ></OutlinedInput>
                        {meta.touched && meta.error ? (
                          <FormHelperText error id="channelName">
                            {meta.error}
                          </FormHelperText>
                        ) : null}
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="title">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <FormControl
                        fullWidth
                        sx={{ ...theme.typography.customInput }}
                      >
                        <InputLabel>Title</InputLabel>
                        <OutlinedInput
                          disabled={isEdit}
                          fullWidth
                          {...field}
                        ></OutlinedInput>
                        {meta.touched && meta.error ? (
                          <FormHelperText error id="title">
                            {meta.error}
                          </FormHelperText>
                        ) : null}
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="contractDescription">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <FormControl
                        fullWidth
                        sx={{ ...theme.typography.customInput }}
                      >
                        <InputLabel>Contract Description</InputLabel>
                        <OutlinedInput
                          disabled={isEdit}
                          fullWidth
                          {...field}
                        ></OutlinedInput>
                        {meta.touched && meta.error ? (
                          <FormHelperText error id="contractDescription">
                            {meta.error}
                          </FormHelperText>
                        ) : null}
                      </FormControl>
                    );
                  }}
                </Field>

                <Field name="description">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <FormControl
                        fullWidth
                        sx={{ ...theme.typography.customInput }}
                      >
                        <InputLabel>Description</InputLabel>
                        <OutlinedInput
                          disabled={isEdit}
                          fullWidth
                          {...field}
                        ></OutlinedInput>
                        {meta.touched && meta.error ? (
                          <FormHelperText error id="description">
                            {meta.error}
                          </FormHelperText>
                        ) : null}
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="dueDate">
                  {(props) => {
                    const { field, form, meta } = props;
                    const { setFieldValue } = form;
                    return (
                      <FormControl
                        fullWidth
                        sx={{ ...theme.typography.customInput }}
                      >
                        {/* <InputLabel>Due Date</InputLabel> */}
                        <LocalizationProvider dateAdapter={DateAdapter}>
                          <DesktopDatePicker
                            {...field}
                            inputFormat="dd/MM/yyyy"
                            onChange={(val) => setFieldValue("dueDate", val)}
                            renderInput={(params) => {
                              params.inputProps.placeholder = "Due Date";
                              return (
                                <TextField
                                  value={field.value}
                                  {...params}
                                  variant="outlined"
                                />
                              );
                            }}
                          />
                        </LocalizationProvider>

                        {meta.touched && meta.error ? (
                          <FormHelperText error id="dueDate">
                            {meta.error}
                          </FormHelperText>
                        ) : null}
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="contractId">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <FormControl
                        fullWidth
                        sx={{ ...theme.typography.customInput }}
                      >
                        <InputLabel>Contract Id</InputLabel>
                        <OutlinedInput
                          disabled={isEdit}
                          fullWidth
                          {...field}
                        ></OutlinedInput>
                        {meta.touched && meta.error ? (
                          <FormHelperText error id="contractId">
                            {meta.error}
                          </FormHelperText>
                        ) : null}
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="totalFeesDue">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <FormControl
                        fullWidth
                        sx={{ ...theme.typography.customInput }}
                      >
                        <InputLabel>Total Fees Due</InputLabel>
                        <OutlinedInput
                          disabled={isEdit}
                          fullWidth
                          {...field}
                        ></OutlinedInput>
                        {meta.touched && meta.error ? (
                          <FormHelperText error id="totalFeesDue">
                            {meta.error}
                          </FormHelperText>
                        ) : null}
                      </FormControl>
                    );
                  }}
                </Field>
                <Box sx={{ mt: 2 }}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      fullWidth
                      size="large"
                      variant="contained"
                      color="custom"
                      id="white-color"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </AnimateButton>
                </Box>
              </Form>
            </Formik>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ViewInvoice;
