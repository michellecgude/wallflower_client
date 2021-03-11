// react
import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useHistory } from "react-router-dom";

// api
import AuthAPI from "./axios/AuthAPI";

// css
// import { Link as RLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  button: {
    maxHeight: 110,
    maxWidth: 110,
    minHeight: 100,
    minWidth: 100,
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 50,
    marginRight: 60,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  moodPrompt: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function MoodPrompt() {
  const [mood, setMood] = useState({
    mood_type: "",
  });

  const history = useHistory();

  AuthAPI.get("/auth/users/me").then((response) => {
    // console.log(response.data.username);
    localStorage.setItem("user_id", response.data.id);
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthAPI.post("/data/moods/", {
        user: localStorage.getItem("user_id"),
        mood_type: mood.mood_type,
      });
      return console.log(response);
    } catch (error) {
      console.log(error);
    }
    // history.push("/dashboard"); make this specific to the user demographic !!!
  };

  const handleChange = (event) => {
    mood.mood_type = event.target.value;
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Wallflower
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" component="main" className={classes.moodPrompt}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          how are you feeling today?
          {/* input name via local storage here as well... */}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Pick what best suits how you're feeling now. You can always come back
          and edit it later.
        </Typography>
      </Container>
      <Container className={classes.buttonContainer}>
        <form type="hidden" onSubmit={handleSubmit}>
          <Button
            type="submit"
            className={classes.button}
            variant="primary"
            value="happy"
            onClick={handleChange}
          >
            happy
          </Button>

          <Button
            type="submit"
            className={classes.button}
            variant="primary"
            value="comfortable"
            onClick={handleChange}
          >
            comfortable
          </Button>
          <Button
            type="submit"
            className={classes.button}
            variant="primary"
            value="calm"
            onClick={handleChange}
          >
            calm
          </Button>
          <Button
            type="submit"
            className={classes.button}
            variant="primary"
            value="content"
            onClick={handleChange}
          >
            content
          </Button>
          <Button
            type="submit"
            className={classes.button}
            variant="primary"
            value="neutral"
            onClick={handleChange}
          >
            neutral
          </Button>
          <Button
            type="submit"
            className={classes.button}
            variant="primary"
            value="anxious"
            onClick={handleChange}
          >
            anxious
          </Button>
          <Button
            type="submit"
            className={classes.button}
            variant="primary"
            value="sad"
            onClick={handleChange}
          >
            sad
          </Button>
          <Button
            type="submit"
            className={classes.button}
            variant="primary"
            value="stressed"
            onClick={handleChange}
          >
            stressed
          </Button>
          <Button
            type="submit"
            className={classes.button}
            variant="primary"
            value="overwhelmed"
            onClick={handleChange}
          >
            overwhelmed
          </Button>
          <Button
            type="submit"
            className={classes.button}
            variant="primary"
            value="tired"
            onClick={handleChange}
          >
            tired
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
}
