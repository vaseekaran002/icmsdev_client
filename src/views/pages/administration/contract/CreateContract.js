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
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useTheme } from "@emotion/react";
import AnimateButton from "ui-component/extended/AnimateButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateContract } from "store/actions/contractActions";

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
      // => .makeStyles-item.makeStyles-item
      padding: "0px 0px 0px 0px",
    },
  },
});

export const CreateContract = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contracts = useSelector((state) => state.contract.contracts);
  const initialValues = {
    channelName: "",
    city: "",
    description: "",
    fees: "",
    timeZone: "",
    title: "",
    venue: "",
    staksPayId: "",
  };

  const validatation = Yup.object({
    staksPayId: Yup.string().required("StaksPayId required"),
    fees: Yup.string().required("fees required"),
    description: Yup.string().required("description required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(updateContract(values));
    if (contracts) {
      navigate("/contracts");
    }
  };
  return (
    <Container className={classes.container}>
      <Grid sm={9} md={5} className={classes.box} container spacing={1}>
        <Grid item>
          <Typography variant="h3">Create Contract</Typography>
        </Grid>
        <Grid className={classes.form} item>
          <Formik
            initialValues={initialValues}
            validationSchema={validatation}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field name="staksPayId">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>StaksPay Id</InputLabel>
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
                      {meta.touched && meta.error ? (
                        <FormHelperText error id="staksPayId">
                          {meta.error}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  );
                }}
              </Field>
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
              <Field name="city">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>City</InputLabel>
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
                      {meta.touched && meta.error ? (
                        <FormHelperText error id="city">
                          {meta.error}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="fees">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Fees</InputLabel>
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
                      {meta.touched && meta.error ? (
                        <FormHelperText error id="fees">
                          {meta.error}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="timeZone">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Time Zone</InputLabel>
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
                      {meta.touched && meta.error ? (
                        <FormHelperText error id="timeZone">
                          {meta.error}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="venue">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Venue</InputLabel>
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
                      {meta.touched && meta.error ? (
                        <FormHelperText error id="venue">
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

export default CreateContract;
