// react
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

// api
import axiosAUTH from "../axios_auth";

// context
import WallflowerContext from "./../WallflowerContext";

// cs
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

  const { setVerified } = useContext(WallflowerContext);

  const history = useHistory();

  const handleChange = (event) =>
    setLogin({ ...login, [event.target.id]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    axiosAUTH
      .post("/jwtoken/obtain/", {
        email: login.email,
        password: login.password,
      })
      .then((result) => {
        axiosAUTH.defaults.headers["Authorization"] =
          "JWT " + result.data.access;
        localStorage.setItem("access_token", result.data.access);
        localStorage.setItem("refresh_token", result.data.refresh);
      })
      .catch((error) => {
        throw error;
      });
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
