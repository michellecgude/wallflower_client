// AXIOS IMPORT
import AuthAPI from "../../axios/AuthAPI";

// REACT IMPORTS
import React, { useState, useEffect, useContext } from "react";
// CONTEXT IMPORT
import WallflowerContext from "../../../WallflowerContext";

// MATERIAL UI IMPORTS
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

// MATERIAL UI STYLING
const useStyles = makeStyles((theme) => ({
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
}));

export default function HabitModal() {
  // VARIABLES
  const [habitForm, setHabitForm] = useState(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  // AXIOS
  function createHabit() {
    AuthAPI.post("/data/habits", habitForm).catch((error) => {
      console.log(error);
    });
  }

  // HANDLE FUNCTIONS
  const handleChange = (event) => {
    setHabitForm({
      ...habitForm,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(habitForm);
    createHabit(habitForm);
  };

  return (
    <div>
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
          <div className={classes.paper}>
            <form type="hidden" onSubmit={handleSubmit}>
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
    </div>
  );
}
