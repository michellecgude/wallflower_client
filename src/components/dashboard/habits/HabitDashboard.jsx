// AXIOS IMPORT
import AuthAPI from "../../axios/AuthAPI";

// REACT IMPORTS
import React, { useState, useEffect } from "react";

// COMPONENT IMPORTS
import { DashboardNavigation } from "../DashNavigation";
import Habit from "./Habit";

// MATERIAL UI IMPORTS
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

// MATERIAL UI STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "100vh",
  },
}));
const drawerWidth = 240;

export default function Habits() {
  // VARIABLES
  let USERID = localStorage.getItem("user_id");
  const [habit, setHabit] = useState({
    name: "",
    description: "",
    note_entry: "",
  });
  const [drawer, setDrawer] = useState(true);
  const [modal, setModal] = useState(false);
  const classes = useStyles();

  function createHabit() {
    AuthAPI.post("/data/habits/", {
      user: USERID,
      name: habit.name,
      description: habit.description,
      note_entry: habit.note_entry,
    })
      .then((response) => {
        setHabit(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getHabitByID(id) {
    return AuthAPI.get(`/data/habits/${id}`)
      .then((response) => {
        setHabit(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteHabit(id) {
    getHabitByID();
    AuthAPI.delete(`/data/habits/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // HANDLE FUNCTIONS
  const handleChange = (event) => {
    setHabit({
      ...habit,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createHabit();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    deleteHabit();
  };

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, drawer && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              drawer && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {localStorage.first_name}'s Habits.
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !drawer && classes.drawerPaperClose),
        }}
        open={drawer}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{DashboardNavigation}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              Add a new habit.
              <Button onClick={handleModalOpen}>Create a New Habit.</Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                onClose={handleModalClose}
                closeAfterTransition
                open={modal}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={modal}>
                  <div className={classes.modalPaper}>
                    <form type="hidden" onSubmit={handleSubmit}>
                      <Button
                        type="hidden submit"
                        id="user_id"
                        value={localStorage.getItem("user_id")}
                        onChange={handleChange}
                      ></Button>
                      <TextField
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        variant="filled"
                        helperText="Give your habit a name!"
                        placeholder=""
                        id="name"
                        label="Habit Name"
                        onChange={handleChange}
                      ></TextField>
                      <TextField
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        variant="filled"
                        helperText="Take a mental note of your habit here."
                        placeholder=""
                        id="note_entry"
                        label="Note Entry"
                        onChange={handleChange}
                      ></TextField>
                      <TextField
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        variant="filled"
                        helperText="Describe what your habit is for."
                        placeholder=""
                        id="description"
                        label="Habit Description"
                        onChange={handleChange}
                      ></TextField>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleModalClose}
                      >
                        Create Habit
                      </Button>
                    </form>
                  </div>
                </Fade>
              </Modal>
            </Grid>
            <Grid item xs={6} md={8} lg={3}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography className={classes.title} gutterBottom>
                    H A B I T
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {habit.name}
                  </Typography>
                  <Typography className={classes.pos}>
                    {habit.note_entry}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {habit.description}
                    <br />
                  </Typography>
                </CardContent>
                <br />
                <CardActions className={classes.pos}>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    className={classes.pos}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className={classes.pos}
                  >
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
