import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { WallflowerContext } from "../WallflowerContext";
import AuthAPI from "./../axios_auth";

// styles
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default function UserRegister() {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    username: "",
    password: "",
    re_password: "",
    errors: {},
  });

  const handleChange = (event) => {
    setRegister({
      ...register,
      [event.target.id]: event.target.value,
    });
  };

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthAPI.post("/auth/users/", {
        firstName: register.firstName,
        lastName: register.lastName,
        role: register.role,
        email: register.email,
        username: register.username,
        password: register.password,
        re_password: register.re_password,
      });
      return console.log(response);
    } catch (error) {
      console.log(error);
    }
    history.push("/howareyou");
  };

  const useStyles = makeStyles((theme) => ({
    typography: {
      fontFamily: "Prompt",
    },
    page: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={`${classes.page} ${classes.typography}`}>
        Sign up
        <FormControl>
          <form className={`${classes.form}`} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={register.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                  value={register.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item sm={12}>
                <Select
                  fullWidth
                  id="role"
                  name="role"
                  key="role"
                  value={register.role}
                  onChange={(event) => {
                    register.role = event.target.value;
                  }}
                >
                  <MenuItem value="frontline">
                    I'm a frontline healthcare worker.
                  </MenuItem>
                  <MenuItem value="unemployed">I'm unemployed.</MenuItem>
                  <MenuItem value="survivor">
                    I'm currently sick/was sick with COVID.
                  </MenuItem>
                  <MenuItem value="loss">
                    I've lost someone close to me from COVID.
                  </MenuItem>
                  <MenuItem value="mentalhealth">
                    I'm have pre-existing mental health conditions.
                  </MenuItem>
                  <MenuItem value="isolated">
                    I'm feeling socially isolated.
                  </MenuItem>
                </Select>
                <FormHelperText>What brings you to wallflower?</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={register.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={register.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password1"
                  label="Enter your password"
                  type="password"
                  id="password"
                  value={register.password}
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password2"
                  label="Confirm your password"
                  type="password"
                  id="re_password"
                  value={register.re_password}
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={`${classes.submit} ${classes.typography}`}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  to="/login"
                  variant="body2"
                  className={classes.typography}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </FormControl>
      </div>
    </Container>
  );
}
