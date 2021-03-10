import React, { useState, useContext } from "react";
import { WallflowerContext } from "../WallflowerContext";
import AuthAPI from "./../axios_auth";

// styles
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default function UserRegister() {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    re_password: "",
    errors: {},
  });

  const handleRegisterChange = (event) => {
    setRegister({
      ...register,
      [event.target.id]: event.target.value,
    });
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthAPI.post("/auth/users/", {
        firstName: register.firstName,
        lastName: register.lastName,
        email: register.email,
        username: register.username,
        password: register.password,
        re_password: register.re_password,
      });
      return console.log(response);
    } catch (error) {
      console.log(error);
    }
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
        <form className={`${classes.form}`} onSubmit={handleRegisterSubmit}>
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
                onChange={handleRegisterChange}
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
                onChange={handleRegisterChange}
              />
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
                onChange={handleRegisterChange}
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
                onChange={handleRegisterChange}
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
                onChange={handleRegisterChange}
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
                onChange={handleRegisterChange}
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
              <Link to="/login" variant="body2" className={classes.typography}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
