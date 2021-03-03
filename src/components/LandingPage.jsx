import React from "react";
import { Link as RLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

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
        </Container>
      </ThemeProvider>
    </div>
  );
}
