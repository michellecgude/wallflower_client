import React from "react";
import { Link as RLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import AuthAPI from "./user_auth/axios_auth";

export default function LandingPage() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Prompt",
      h2: {
        fontWeight: 600,
        letterSpacing: 6,
      },
    },
  });

  const handleLogout = async () => {
    try {
      const response = await AuthAPI.post("blacklistoken/", {
        refresh_token: localStorage.getItem("refresh_token"),
      });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      AuthAPI.defaults.headers["Authorization"] = null;
      return response;
    } catch (event) {
      console.log(event);
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography variant="h2" gutterBottom>
            Welcome to Wallflower.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {"We think its time everyone starts healing from COVID."}
            <br />
            {"Lets do it together."}
          </Typography>
          <Typography>
            <Link to="/register" component={RLink}>
              Register.
            </Link>
          </Typography>
          <Typography>
            <Link to="/login" component={RLink}>
              Login.
            </Link>
            <Typography>
              <Link to="/dashboard" component={RLink}>
                Dashboard.
              </Link>
            </Typography>
          </Typography>
          <button onClick={handleLogout}>Logout</button>
        </Container>
      </ThemeProvider>
    </div>
  );
}
