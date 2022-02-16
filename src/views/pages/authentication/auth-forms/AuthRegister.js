import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
  MenuItem,
} from "@mui/material";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

// third party
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

// project imports
import useScriptRef from "hooks/useScriptRef";
import Google from "assets/images/icons/social-google.svg";
import AnimateButton from "ui-component/extended/AnimateButton";
import { strengthColor, strengthIndicator } from "utils/password-strength";
import { registerUser } from "store/actions/authActions";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { getRolesByTenantAuth } from "store/actions/roleActions";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  form: {
    "&&": {
      // => .makeStyles-item.makeStyles-item
      backgroundColor: "#129443",
    },
  },
});

const FirebaseRegister = ({ ...others }) => {
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    limit: 500,
  });
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [options, setOptions] = useState([]);

  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const customization = useSelector((state) => state.customization);
  const user = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);
  const roles = useSelector((state) => state.role.roles);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [checked, setChecked] = useState(false);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const googleHandler = async () => {
    console.error("Register");
  };

  useEffect(() => {
    console.log("use effect called back====");
    if (user) {
      // navigate('/dashboard', { replace: true });
    } else if (error) {
      console.log("Error seciton is called==");
      setErrorMessage(`${error.error} - ${error.message}`);
    }
  }, [user, error]);

  useEffect(() => {
    if (options.length == 0) {
      roles.map((item) => {
        options.push(item.name);
      });
    }
  }, [roles]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    dispatch(getRolesByTenantAuth());
    changePassword("123456");
  }, []);

  const initialValues = {
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    roles: [],
    termsCheck: false,
    submit: null,
  };

  const validation = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(500)
      .required("Email is required"),
    password: Yup.string().max(255).required("Password is required"),
    termsCheck: Yup.boolean()
      .oneOf([true], "Required terms of use")
      .required("Required terms of use"),
  });

  const handleRegisterUser = (values) => {
    dispatch(registerUser(values));
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              Sign up with Email address
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={handleRegisterUser}
      >
        <Form>
          <Grid container spacing={matchDownSM ? 0 : 2}>
            <Grid item xs={12} sm={6}>
              <Field name="firstName">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>First Name</InputLabel>
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
                      {meta.touched && meta.error ? (
                        <FormHelperText error id="firstName">
                          {meta.error}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  );
                }}
              </Field>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field name="lastName">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <FormControl
                      fullWidth
                      sx={{ ...theme.typography.customInput }}
                    >
                      <InputLabel>Last Name</InputLabel>
                      <OutlinedInput fullWidth {...field}></OutlinedInput>
                      {meta.touched && meta.error ? (
                        <FormHelperText error id="lastName">
                          {meta.error}
                        </FormHelperText>
                      ) : null}
                    </FormControl>
                  );
                }}
              </Field>
            </Grid>
          </Grid>
          <Field name="roles">
            {(props) => {
              const { field, form, meta } = props;
              const { setFieldValue } = form;
              return (
                <FormControl fullWidth>
                  <Autocomplete
                    {...field}
                    style={{ marginTop: "2%", marginBottom: "2%" }}
                    filterOptions={filterOptions}
                    options={options}
                    value={selectedOptions}
                    getOptionDisabled={(option) =>
                      selectedOptions.length === 5 ||
                      selectedOptions.includes(option)
                        ? true
                        : false
                    }
                    loading={loading}
                    onChange={(e, value) => {
                      setSelectedOptions(value);
                      setFieldValue("roles", value);
                    }}
                    multiple
                    renderInput={(params) => (
                      <>
                        <TextField
                          {...params}
                          label="Select Roles"
                          variant="outlined"
                          helperText={
                            selectedOptions.length === 5 && errorText === ""
                              ? "Maximum number of selections have been made."
                              : errorText
                          }
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <React.Fragment>
                                {loading ? (
                                  <CircularProgress color="inherit" size={20} />
                                ) : null}
                                {params.InputProps.endAdornment}
                              </React.Fragment>
                            ),
                          }}
                        />
                      </>
                    )}
                  />

                  {meta.touched && meta.error ? (
                    <FormHelperText error id="dueDate">
                      {meta.error}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              );
            }}
          </Field>
          <Field name="email">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                  <InputLabel>Email</InputLabel>
                  <OutlinedInput fullWidth {...field}></OutlinedInput>
                  {meta.touched && meta.error ? (
                    <FormHelperText error id="email">
                      {meta.error}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              );
            }}
          </Field>
          <Field name="password">
            {(props) => {
              const { field, form, meta } = props;
              const { name, value, onChange, onBlur } = field;

              return (
                <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => {
                      changePassword(e.target.value);
                      onChange(e);
                    }}
                    name={name}
                    value={value}
                    onBlur={onBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    fullWidth
                  ></OutlinedInput>
                  {meta.touched && meta.error ? (
                    <FormHelperText error id="password">
                      {meta.error}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              );
            }}
          </Field>
          {strength !== 0 && (
            <FormControl fullWidth>
              <Box sx={{ mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Box
                      style={{ backgroundColor: level?.color }}
                      sx={{ width: 85, height: 8, borderRadius: "7px" }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" fontSize="0.75rem">
                      {level?.label}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </FormControl>
          )}
          <Field name="termsCheck">
            {(props) => {
              const { field, form, meta } = props;
              const { setFieldValue } = form;
              return (
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ color: "#129443", marginLeft: "3%" }}
                        checked={checked}
                        onChange={(event) => {
                          setChecked(event.target.checked);
                          setFieldValue("termsCheck", event.target.checked);
                        }}
                        id="termsCheck"
                        name="termsCheck"
                        color="primary"
                        required
                      />
                    }
                    label={
                      <Typography
                        style={{ width: "20rem" }}
                        variant="subtitle1"
                      >
                        Agree with &nbsp;
                        <Typography variant="subtitle1" component={Link} to="#">
                          Terms & Condition.
                        </Typography>
                      </Typography>
                    }
                  />
                </div>
              );
            }}
          </Field>
          {errorMessage && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>{errorMessage}</FormHelperText>
            </Box>
          )}
          <Box sx={{ mt: 2 }}>
            <AnimateButton>
              <Button
                className={classes.form}
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
    </>
  );
};

export default FirebaseRegister;
