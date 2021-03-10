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
import axiosAUTH from "./user_auth/axios_auth";
// import axios from "axios";

// context
import WallflowerContext from "./user_auth/WallflowerContext";

// css
import { Link as RLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import dataAPI from "./dashboard/dashboard_data/axios_data";

// const getAllMoods = () => {
//   return dataAPI.get("/data/moods");
// };

// const getSpecificMoods = (id) => {
//   return dataAPI.get(`/data/moods/${id}`);
// };

// const createMoods = (data) => {
//   return dataAPI.post("/data/moods", data);
// };

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
  const idValue = useRef();
  const userValue = useRef();
  const moodValue = useRef();
  const createdValue = useRef();
  const noteValue = useRef();

  const { moods, setMoods } = useContext(WallflowerContext);

  // mood request, in progress.... ?
  const [mood, setMood] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("mood submitted!");
    console.log(idValue.current.value);
    console.log(userValue.current.value);
    console.log(moodValue.current.value);
    console.log(createdValue.current.value);
    console.log(noteValue.current.value);
  };

  const handleChange = () => {
    console.log("handle change works!");
    // let moods = {
    //   happy: mood.happy,
    //   comfortable: mood.comfortable,
    //   calm: mood.calm,
    //   content: mood.content,
    //   neutral: mood.neutral,
    //   anxious: mood.anxious,
    //   sad: mood.sad,
    //   stressed: mood.stressed,
    //   overwhelmed: mood.overwhelmed,
    //   tired: mood.tired,
    // };
    // axiosAUTH
    //   .post(`/data/moods/`, moods)
    //   .then((response) => {
    //     setMood({
    //       happy: response.mood_type.happy,
    //     });
    //     console.log(response.data);
    //   })
    //   .catch((event) => {
    //     console.log(event);
    //   });
    //   dataAPI
    //     .createMoods(moods)
    //     .then((response) => {
    //       setMood({
    //         happy: response.moods.mood_type,
    //         // happy: response,
    //       });
    //       console.log(response.data);
    //     })
    //     .catch((event) => {
    //       console.log(event);
    //     });
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
            onClick={handleChange}
          >
            happy
            <input
              type="hidden"
              id="id"
              name="value"
              ref={idValue}
              // value="i am id"
            />
            <input
              type="hidden"
              id="user"
              name="value"
              ref={userValue}
              // value="i am user"
            />
            <input
              type="hidden"
              id="mood_type"
              name="value"
              ref={moodValue}
              // value="i am mood"
            />
            <input
              type="hidden"
              id="created_at"
              name="value"
              ref={createdValue}
              // value="i am created"
            />
            <input
              type="hidden"
              id="note_entry"
              name="value"
              ref={noteValue}
              // value="i am note"
            />
          </Button>

          {/* <Button className={classes.button} variant="primary">
          comfortable
        </Button>
        <Button className={classes.button} variant="primary">
          calm
        </Button>
        <Button className={classes.button} variant="primary">
          content
        </Button>
        <Button className={classes.button} variant="primary">
          neutral
        </Button>
        <Button className={classes.button} variant="primary">
          anxious
        </Button>
        <Button className={classes.button} variant="primary">
          sad
        </Button>
        <Button className={classes.button} variant="primary">
          stressed
        </Button>
        <Button className={classes.button} variant="primary">
          overwhelmed
        </Button>
        <Button className={classes.button} variant="primary">
          tired
        </Button> */}
        </form>
      </Container>
    </React.Fragment>
  );
}
