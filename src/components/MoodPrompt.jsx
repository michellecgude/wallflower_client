import React from "react";
import { Link as RLink } from "react-router-dom";
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

const data = [
  { name: "Happy", value: 400 },
  { name: "Comfortable", value: 300 },
  { name: "Calm", value: 300 },
  { name: "Content", value: 200 },
  { name: "Neutral", value: 200 },
  { name: "Anxious", value: 400 },
  { name: "Sad", value: 300 },
  { name: "Stressed", value: 300 },
  { name: "Overwhelmed", value: 200 },
  { name: "Tired", value: 200 },
];

const COLORS = [
  "#EBF0CD", // happy
  "#F4E3CC", // comfortable
  "#DFE2E7", // calm
  "#EEE0F2", // content
  "#D4E9D2", // neutral
  "#F4DAD7", // anxious
  "#DEDEDE", // sad
  "#F9E8EE", // stressed
  "#FFE2D8", // overwhelmed
  "#CDCDCD", // tired
];

export default function MoodPrompt() {
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
        <Button className={classes.button} variant="primary">
          <RLink to="/dashboard">happy</RLink>
        </Button>
        <Button className={classes.button} variant="primary">
          <RLink to="/dashboard">comfortable</RLink>
        </Button>
        <Button className={classes.button} variant="primary">
          <RLink to="/dashboard">calm</RLink>
        </Button>
        <Button className={classes.button} variant="primary">
          <RLink to="/dashboard">content</RLink>
        </Button>
        <Button className={classes.button} variant="primary">
          <RLink to="/dashboard">neutral</RLink>
        </Button>
        <Button className={classes.button} variant="primary">
          <RLink to="/dashboard">anxious</RLink>
        </Button>
        <Button className={classes.button} variant="primary">
          <RLink to="/dashboard">sad</RLink>
        </Button>
        <Button className={classes.button} variant="primary">
          <RLink to="/dashboard">stressed</RLink>
        </Button>
        <Button className={classes.button} variant="primary">
          <RLink to="/dashboard">overwhelmed</RLink>
        </Button>
        <Button className={classes.button} variant="primary">
          <RLink to="/dashboard">tired</RLink>
        </Button>
      </Container>
    </React.Fragment>
  );
}
