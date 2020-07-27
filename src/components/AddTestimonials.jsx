import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Button,
  Container,
  Box,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import firebase from "./Firebase";
import GradientBackground from "./GradientBackground";

const useStyles = makeStyles((theme) => ({
  formSize: {},
  boxStyle: {
    width: "25%",
    textAlign: "center",
    marginLeft: "auto",
    paddingTop: "16px",
    marginRight: "auto",
    paddingLeft: "32px",
    paddingRight: "32px",
    paddingBottom: "16px",

  },
  containerStyle: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    height: '100vh'
  },
  textStyle: {
    fontFamily: "Roboto Slab, serif",
  },
  buttonStyle: {
    marginTop: '2%',
  }
}));

export const AddTestimonials = () => {
  var [data, setData] = useState([]);
  var [name, setName] = useState("");
  var [message, setMessage] = useState("");
  const classes = useStyles();

  const OnChangeName = (e) => {
    setName(e.target.value);
  };
  const OnChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  let customerData = [];

  const onSubmit = () => {
    customerData.push({ personName: name, personMessage: message });
    setData(customerData);
    firebase.database().ref(`testimonials/${new Date().getTime()}`).set({
      personName: name,
      personMessage: message,
    });
  };

  return (
    <GradientBackground>
      <Grid container align="center" className={classes.containerStyle}>
        <Paper className={classes.boxStyle}>
          <form className={classes.formSize}>
            <Typography variant="h5" className={classes.textStyle}>Add Your Testimonial</Typography>
            <FormControl
              margin="normal"
              required
              fullWidth
              className={classes.formControlStyle}
            >
              <InputLabel htmlFor="name">Name of Person</InputLabel>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={OnChangeName}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                id="full-width-text-field"
                label="Type your testimonial here..."
                multiline
                variant="outlined"
                rows="8"
                defaultValue={message}
                onChange={OnChangeMessage}
              />
            </FormControl>
            <Button onClick={onSubmit} variant="contained" className={classes.buttonStyle}>
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </GradientBackground>
  );
};
