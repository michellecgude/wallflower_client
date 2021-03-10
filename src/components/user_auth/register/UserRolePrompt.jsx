import React, { useState, useContext } from "react";
import { WallflowerContext } from "../WallflowerContext";
import AuthAPI from "./../axios_auth";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

export default function UserRolePrompt() {
  const [role, setRole] = useState({
    demographic: "",
  });

  const handlePromptChange = (event) => {
    setRole({
      ...role,
      [event.target.id]: event.target.value,
    });
  };

  const handleRoleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthAPI.post("/account/profiles", {
        demographic: role.demographic,
      });
      return console.log(response);
    } catch (error) {
      console.log(error);
    }
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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      marginTop: theme.spacing(20),
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <form className={`${classes.form}`} onSubmit={handleRoleSubmit}>
        <Grid item m={12}>
          <Select
            fullWidth
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={role.demographic}
            onSubmit={handleRoleSubmit}
          >
            <MenuItem value={role.demographic[3]}>
              I'm a frontline healthcare worker.
            </MenuItem>
            <MenuItem value={role.demographic[3]} onChange={handlePromptChange}>
              I'm unemployed.
            </MenuItem>
            <MenuItem value={role.demographic[3]} onChange={handlePromptChange}>
              I'm currently sick/was sick with COVID.
            </MenuItem>
            <MenuItem value={role.demographic[3]} onChange={handlePromptChange}>
              I've lost someone close to me from COVID.
            </MenuItem>
            <MenuItem value={role.demographic[3]} onChange={handlePromptChange}>
              I'm have pre-existing mental health conditions.
            </MenuItem>
            <MenuItem value={role.demographic[3]} onChange={handlePromptChange}>
              I'm feeling socially isolated.
            </MenuItem>
          </Select>
          <FormHelperText>What brings you to wallflower?</FormHelperText>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={`${classes.submit} ${classes.typography}`}
        >
          Let's get you comfortable.
        </Button>
      </form>
    </div>
  );
}
