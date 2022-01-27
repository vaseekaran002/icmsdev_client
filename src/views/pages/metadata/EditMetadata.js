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
import { useNavigate, useParams } from "react-router";
import { getRoleByTenant } from "store/actions/roleActions";
import { createMetadata } from "store/actions/metadataActions";

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
    padding: "0px 0px 0xp 0xp",
  },
});

export const EditMetadata = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();
  const [statusChecked, setStatusChecked] = useState(true);
  const [editMetadata, setEditMetadata] = useState();
  const options = useSelector((state) => state.role.roles);
  const metadatas = useSelector((state) => state.metadata.metadatas);
  const error = useSelector((state) => state.role.error);
  const handleCreateMetadata = (values) => {
    console.log(values);
    dispatch(createMetadata(values));
  };
  const [optionValues, setOptionValues] = useState([]);
  useEffect(() => {
    dispatch(getRoleByTenant());
    setEditMetadata(metadatas.filter((item) => item.componentName === name));
    setStatusChecked(() => {
      const meta = metadatas.filter((item) => item.componentName === name);
      if (meta[0].status === "active") {
        return true;
      } else {
        return false;
      }
    });
  }, []);

  useEffect(() => {
    console.log("edit", editMetadata);
    if (editMetadata != undefined) {
      editMetadata[0].roles.map((item) => {
        setOptionValues(optionValues.push(item.name));
      });
    }
  }, [editMetadata]);

  useEffect(() => {
    console.log("option", optionValues);
  }, [optionValues]);
  //   const initialValues = {
  //     componentName: editMetadata[0].componentName,
  //     componentOrder: editMetadata[0].componentOrder,
  //     displayName: editMetadata[0].displayName,
  //     status: editMetadata[0].status,
  //     roles: editMetadata[0].roles,
  //   };

  const validatation = Yup.object({
    componentName: Yup.string().required("component Name required"),
  });

  return (
    <Container className={classes.container}>
      {editMetadata && (
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
          <Grid
            className={classes.form}
            item
            justifyContent="center"
            alignItems="center"
          >
            <Formik
              initialValues={{
                id: editMetadata[0].id,
                componentName: editMetadata[0].componentName,
                componentOrder: editMetadata[0].componentOrder,
                displayName: editMetadata[0].displayName,
                status: editMetadata[0].status,
                roles: optionValues,
              }}
              validationSchema={validatation}
              onSubmit={handleCreateMetadata}
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
                <Field name="roles">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <div>
                        <InputLabel>Roles</InputLabel>
                        {options.map((option) => (
                          <FormControl className={classes.options}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  {...field}
                                  value={option.name}
                                  checked={field.value.includes(option.name)}
                                />
                              }
                              label={option.name}
                            />
                          </FormControl>
                        ))}
                      </div>
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
      )}
    </Container>
  );
};

export default EditMetadata;
