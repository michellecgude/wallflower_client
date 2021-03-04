// react
import React, { useState, useEffect, useContext } from "react";
import Context from "./Context";

// npm package jwt decode for decoding tokens, grabbing user data
import jwt_decode from "jwt-decode";
import axios from "axios";

// css
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

export default function UserLogin() {
  const setAuth = useContext(Context);
  const [login, setLogin] = useState({
    email: "",
    password: "",
    errors: {},
  });

  // sets and applies auth to every token reqeust when logged in
  const setAuthToken = (token) => {
    token
      ? (axios.defaults.headers.common["Authorization"] = token)
      : delete axios.defaults.headers.common["Authorization"];
  };

  // login the user (ie, get the user token)
  const loginUser = (setLogin) => {
    axios
      .post("/api/auth/token/login/", setLogin)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
        setAuthToken(token);
        const decodeToken = jwt_decode(token);
        setAuth(decodeToken);
      })
      .catch((error) => console.log(error));
  };

  const onChange = (event) => {
    setLogin({ ...login, [event.target.id]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(setLogin);
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
        <form className={`${classes.form}`} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={onChange}
                defaultValue={setLogin.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={onChange}
                defaultValue={setLogin.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
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
