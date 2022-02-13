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
import { Formik } from "formik";
import { useTheme } from "@emotion/react";
import AnimateButton from "ui-component/extended/AnimateButton";
import { createTenant } from "store/actions/tenantActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Form } from "react-bootstrap";

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

export const EditTenant = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();
  const [statusChecked, setStatusChecked] = useState(true);
  const [editTenant, setEditTenant] = useState();
  const tenants = useSelector((state) => state.tenant.tenants);
  const error = useSelector((state) => state.tenant.tenants);
  
  const handleCreateTenant = (values) => {
    console.log(values);
    dispatch(createTenant(values));
    // if (tenants) {
    //   navigate("/tenant");
    // }
  };

  useEffect(() => {
    setEditTenant(tenants.filter((item) => item.name === name));
    setStatusChecked(() => {
      const tenant = tenants.filter((item) => item.name === name);
      if (tenant[0].status === "active") {
        return true;
      } else {
        return false;
      }
    });
  }, []);

  useEffect(() => {
    if (!tenants || tenants.length === 0) {
      navigate("/tenant");
    }
  });

  return (
    <Container className={classes.container}>
      {editTenant && (
        <Grid className={classes.box} sm={9} md={5} container spacing={1}>
          <Grid item>
            <Typography variant="h3"> Create Tenant</Typography>
          </Grid>

          <Grid item>
            <Formik
              initialValues={{
                id: editTenant[0].id,
                name: editTenant[0].name,
                description: editTenant[0].description,
                status: editTenant[0].status,
              }}
              validationSchema={Yup.object({
                name: Yup.string().uppercase().required("Tenant name required"),
                description: Yup.string(),
              })}
              onSubmit={async (
                values,
                { event, props, setErrors, setStatus, setSubmitting }
              ) => {
                try {
                  handleCreateTenant(values);
                  setStatus({ success: true });
                  setSubmitting(true);
                } catch (err) {
                  console.error(err);
                  setStatus({ success: false });
                  setErrors({ submit: err.message });
                  setSubmitting(false);
                }
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values,
                setFieldValue,
              }) => {
                return (
                  <form noValidate onSubmit={handleSubmit}>
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Tenant Name</InputLabel>
                      <OutlinedInput
                        id="tenant-name"
                        type="text"
                        value={values.name}
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="Tenant Name"
                      />
                      {touched.name && errors.name && (
                        <FormHelperText error id="tenant-name">
                          {errors.name}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Description</InputLabel>
                      <OutlinedInput
                        id="description"
                        type="text"
                        value={values.description}
                        name="description"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="description"
                        inputProps={{
                          style: {
                            marginTop: "5%",
                          },
                        }}
                        multiline
                        rows={4}
                      />
                      {touched.description && errors.description && (
                        <FormHelperText error id="description">
                          {errors.description}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <FormControl>
                      <FormLabel>Status</FormLabel>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={statusChecked}
                            onChange={() => {
                              setStatusChecked(!statusChecked);
                              console.log(statusChecked);
                              statusChecked
                                ? setFieldValue("status", "inactive")
                                : setFieldValue("status", "active");
                            }}
                          />
                        }
                        label="active"
                      />
                    </FormControl>
                    <Box sx={{ mt: 2 }}>
                      <AnimateButton>
                        <Button
                          disableElevation
                          disabled={isSubmitting}
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
                  </form>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default EditTenant;
