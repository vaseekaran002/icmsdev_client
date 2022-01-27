import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import { useTheme } from "@emotion/react";
import AnimateButton from "ui-component/extended/AnimateButton";
import { createRole } from "store/actions/roleActions";
import * as Yup from "yup";
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

export const EditRole = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [statusChecked, setStatusChecked] = useState(true);
  const roles = useSelector((state) => state.role.roles);
  const [editRole, setEditRole] = useState();
  const { name } = useParams();
  const navigate = useNavigate();
  const role = useSelector((state) => state.role.roles);
  const error = useSelector((state) => state.role.error);
  const handleCreateRole = (values) => {
    console.log(values);
    dispatch(createRole(values));
    if (role) {
      navigate("/role");
    }
  };

  useEffect(() => {
    console.log("role", roles);
    setEditRole(roles.filter((item) => item.name === name));
    setStatusChecked(() => {
      const role = roles.filter((item) => item.name === name);
      if (role[0].status === "active") {
        return true;
      } else {
        return false;
      }
    });
  }, []);

  return (
    <Container className={classes.container}>
      {editRole && (
        <Grid className={classes.box} sm={9} md={5} container spacing={1}>
          <Grid item>
            <Typography variant="h3">Create Role</Typography>
          </Grid>
          <Grid item>
            <Formik
              initialValues={{
                id: editRole[0].id,
                name: editRole[0].name,
                description: editRole[0].description,
                status: editRole[0].status,
              }}
              validationSchema={Yup.object({
                name: Yup.string().uppercase().required("Role name required"),
                description: Yup.string(),
              })}
              onSubmit={async (
                values,
                { event, props, setErrors, setStatus, setSubmitting }
              ) => {
                try {
                  handleCreateRole(values);
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
                      error={Boolean(touched.name && errors.name)}
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Role Name</InputLabel>
                      <OutlinedInput
                        id="role-name"
                        type="text"
                        value={values.name}
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label="Role Name"
                        inputProps={{}}
                      />
                      {touched.name && errors.name && (
                        <FormHelperText error id="role-name">
                          {errors.name}
                        </FormHelperText>
                      )}
                    </FormControl>
                    <FormControl
                      fullWidth
                      error={Boolean(touched.description && errors.description)}
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

export default EditRole;
