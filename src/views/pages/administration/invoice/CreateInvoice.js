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
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Formik, Field, Form } from "formik";
import { useTheme } from "@emotion/react";
import AnimateButton from "ui-component/extended/AnimateButton";
import { createTenant } from "store/actions/tenantActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

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
});

const CreateInvoice = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [statusChecked, setStatusChecked] = useState(true);
  // const tenant = useSelector((state) => state.tenant.tenants);
  // const error = useSelector((state) => state.tenant.tenants);

  const initialValues = {
    contractId: "",
    channelName: "",
    title: "",
    description: "",
    totalFeesdue: "",
    contractDescription: "",
    dueDate: "",
  };

  const validatation = Yup.object({
    contractId: Yup.string().required("Contract Id required"),
    // totalFeesdue: Yup.string().required("Total Fees Due required"),
    dueDate: Yup.string().required("Due Date required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    // dispatch(createTenant(values));
    // if (tenant) {
    //   navigate("/tenant");
    // }
  };

  return (
    <Container className={classes.container}>
      <Grid sm={9} md={5} className={classes.box} container spacing={1}>
        <Grid item>
          <Typography variant="h3">Create Invoice</Typography>
        </Grid>
        <Grid className={classes.form} item>
          <Formik
            initialValues={initialValues}
            validationSchema={validatation}
            onSubmit={(values) => {
              console.log(values);
            }}
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
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
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
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
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
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
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
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
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
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Due Date</InputLabel>
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
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
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
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
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
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
      </Grid>
    </Container>
  );
};

export default CreateInvoice;