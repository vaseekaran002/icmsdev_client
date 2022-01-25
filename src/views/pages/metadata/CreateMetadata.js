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
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useTheme } from "@emotion/react";
import AnimateButton from "ui-component/extended/AnimateButton";
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

export const CreatMetadata = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [statusChecked, setStatusChecked] = useState(true);
  const role = useSelector((state) => state.role.roles);
  const error = useSelector((state) => state.role.error);
  const handleCreateMetadata = (values) => {};

  const initialValues = {
    componentName: "",
    componentOrder: "",
    displayName: "",
    status: "",
    roles: [],
  };

  const validatation = Yup.object({
    componentName: Yup.string().required("component Name required"),
  });

  return (
    <Container className={classes.container}>
      <Grid
        sm={9}
        md={5}
        direction="column"
        className={classes.box}
        container
        spacing={1}
      >
        <Grid item>
          <Typography variant="h3">Create Metadata</Typography>
        </Grid>
        <Grid item>
          <Formik
            initialValues={initialValues}
            validationSchema={validatation}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <Field name="componentName">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Component Name</InputLabel>
                      <OutlinedInput
                        fullWidth
                        label="Component Name"
                        {...field}
                      ></OutlinedInput>
                      {meta.touched && meta.error ? (
                        <FormHelperText error id="componentName">
                          {meta.error}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="componentOrder">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Component Order</InputLabel>
                      <OutlinedInput
                        type="number"
                        fullWidth
                        label="Component Name"
                        {...field}
                      ></OutlinedInput>
                      {meta.touched && meta.error ? (
                        <FormHelperText error id="componentOrder">
                          {meta.error}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="displayName">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Display Name</InputLabel>
                      <OutlinedInput
                        fullWidth
                        label="Display Name"
                        {...field}
                      ></OutlinedInput>
                      {meta.touched && meta.error ? (
                        <FormHelperText error id="displayName">
                          {meta.error}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  );
                }}
              </Field>
              <Field name="status">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl>
                      <FormLabel>Status</FormLabel>
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            checked={statusChecked}
                            onChange={() => {
                              setStatusChecked(!statusChecked);
                              statusChecked
                                ? form.setFieldValue("status", "inactive")
                                : form.setFieldValue("status", "active");
                            }}
                          />
                        }
                        label="active"
                      />
                    </FormControl>
                  );
                }}
              </Field>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreatMetadata;
