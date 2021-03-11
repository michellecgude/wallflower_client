// AXIOS IMPORT
import AuthAPI from "../../axios/AuthAPI";

// REACT IMPORTS
import React, { useState, useEffect, useContext } from "react";

// MATERIAL UI IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

// MATERIAL UI STYLING
const useStyles = makeStyles((theme) => ({
  cardRoot: {
    maxWidth: 345,
  },
}));

export default function Habits({ habit }) {
  // VARIABLES
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            H A B I T
          </Typography>
          <Typography variant="h5" component="h2">
            {habit.name}
          </Typography>
          <Typography className={classes.pos}>{habit.note_entry}</Typography>
          <Typography variant="body2" component="p">
            {habit.description}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" color="secondary">
            Delete
          </Button>
          <Button variant="contained" size="small" color="primary">
            Update
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
