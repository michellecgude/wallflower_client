// react
import React, { useState, useEffect } from "react";

// api
import AuthAPI from "./../axios_auth";

// css
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

export default function UserLogin() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    errors: {},
  });

  const handleChange = (event) =>
    setLogin({ ...login, [event.target.id]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthAPI.post("/jwtoken/obtain/", {
        email: login.email,
        password: login.password,
      });
      AuthAPI.defaults.headers["Authorization"] = "JWT " + response.data.access;
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      return response;
    } catch (error) {
      throw error;
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
        Login
        <form className={`${classes.form}`} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                defaultValue={setLogin.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={login.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                defaultValue={setLogin.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={login.password}
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
              <div href="#" variant="body2" className={classes.typography}>
                Welcome back, wallflower. How've you been?
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
