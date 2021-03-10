import React, { useState, useEffect } from "react";

// api
import AuthAPI from "./user_auth/axios_auth";

// css
import { Link as RLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// import dataAPI from "./dashboard/dashboard_data/axios_data";
import axios from "axios";

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
  const [privateRoute, setPrivateRoute] = useState("");

  const getRoute = async () => {
    try {
      const header = localStorage.getItem("access_token");
      console.log(header);
      // let response = await AuthAPI.get("/howareyou/");
      // const privateRoute = response.data.howareyou;
      // privateRoute(privateRoute);
      // return privateRoute;
    } catch (error) {
      console.log("Error :", JSON.stringify(error, null, 4));
      throw error;
    }
  };

  useEffect(() => {
    const privateMessage = getRoute();
    console.log("message data: " + JSON.stringify(privateMessage, null, 4));
  }, []);

  // mood request, in progres.... ?
  // const [mood, setMood] = useState({
  //   happy: "",
  //   comfortable: "",
  //   calm: "",
  //   content: "",
  //   neutral: "",
  //   anxious: "",
  //   sad: "",
  //   stressed: "",
  //   overwhelmed: "",
  //   tired: "",
  // });

  // const saveMood = () => {
  //   let moods = {
  //     happy: mood.happy,
  //     comfortable: mood.comfortable,
  //     calm: mood.calm,
  //     content: mood.content,
  //     neutral: mood.neutral,
  //     anxious: mood.anxious,
  //     sad: mood.sad,
  //     stressed: mood.stressed,
  //     overwhelmed: mood.overwhelmed,
  //     tired: mood.tired,
  //   };

  // axios
  //   .post(`https://wall-flower-api.herokuapp.com/data/moods/`, moods)
  //   .then((response) => {
  //     setMood({
  //       happy: response.mood_type[1],
  //     });
  //     console.log(response.data);
  //   })
  //   .catch((event) => {
  //     console.log(event);
  //   });

  // dataAPI
  //   .createMoods(moods)
  //   .then((response) => {
  //     setMood({
  //       happy: response.moods.mood_type,
  //       // happy: response,
  //     });
  //     console.log(response.data);
  //   })
  //   .catch((event) => {
  //     console.log(event);
  //   });

  // const classes = useStyles();

  return (
    <div>{privateRoute.privateMessage}</div>
    // <React.Fragment>
    //   <CssBaseline />
    //   <AppBar
    //     position="static"
    //     color="default"
    //     elevation={0}
    //     className={classes.appBar}
    //   >
    //     <Toolbar className={classes.toolbar}>
    //       <Typography
    //         variant="h6"
    //         color="inherit"
    //         noWrap
    //         className={classes.toolbarTitle}
    //       >
    //         Wallflower
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    //   <Container maxWidth="md" component="main" className={classes.moodPrompt}>
    //     <Typography
    //       component="h1"
    //       variant="h2"
    //       align="center"
    //       color="textPrimary"
    //       gutterBottom
    //     >
    //       how are you feeling today?
    //       {/* input name via local storage here as well... */}
    //     </Typography>
    //     <Typography
    //       variant="h5"
    //       align="center"
    //       color="textSecondary"
    //       component="p"
    //     >
    //       Pick what best suits how you're feeling now. You can always come back
    //       and edit it later.
    //     </Typography>
    //   </Container>
    //   <Container className={classes.buttonContainer}>
    //     <Button className={classes.button} variant="primary" onClick={saveMood}>
    //       {/* <RLink to="/dashboard">happy</RLink> */}
    //       happy
    //     </Button>
    //     <Button className={classes.button} variant="primary">
    //       {/* <RLink to="/dashboard">comfortable</RLink> */}
    //       comfortable
    //     </Button>
    //     <Button className={classes.button} variant="primary">
    //       {/* <RLink to="/dashboard">calm</RLink> */}
    //       calm
    //     </Button>
    //     <Button className={classes.button} variant="primary">
    //       {/* <RLink to="/dashboard">content</RLink> */}
    //       content
    //     </Button>
    //     <Button className={classes.button} variant="primary">
    //       {/* <RLink to="/dashboard">neutral</RLink> */}
    //       neutral
    //     </Button>
    //     <Button className={classes.button} variant="primary">
    //       {/* <RLink to="/dashboard">anxious</RLink> */}
    //       anxious
    //     </Button>
    //     <Button className={classes.button} variant="primary">
    //       {/* <RLink to="/dashboard">sad</RLink> */}
    //       sad
    //     </Button>
    //     <Button className={classes.button} variant="primary">
    //       {/* <RLink to="/dashboard">stressed</RLink> */}
    //       stressed
    //     </Button>
    //     <Button className={classes.button} variant="primary">
    //       {/* <RLink to="/dashboard">overwhelmed</RLink> */}
    //       overwhelmed
    //     </Button>
    //     <Button className={classes.button} variant="primary">
    //       {/* <RLink to="/dashboard">tired</RLink> */}
    //       tired
    //     </Button>
    //   </Container>
    // </React.Fragment>
  );
}
