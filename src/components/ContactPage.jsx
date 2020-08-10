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
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com";
import NavBar from './NavBar';

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
    height: "100vh",
  },
  textStyle: {
    fontFamily: "Roboto Slab, serif",
  },
  buttonStyle: {
    marginTop: "2%",
  },
}));

const ContactPage = () => {
  var [data, setData] = useState([]);
  var [name, setName] = useState("");
  var [message, setMessage] = useState("");
  const classes = useStyles();
  var [email, setEmail] = useState("");
  var [file, setFiles] = useState(null)

  const OnChangeName = (e) => {
    setName(e.target.value);
  };
  const OnChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const OnChangeFile = (e) => {
    if(e.target.files[0]){
      setFiles(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('this is clicked')
    console.log('this was the file', file)
    let templateParams = {
      from_name: email,
      to_name: 'jason.singh@baruchmail.cuny.edu',
      message_html: message,
      file: file
    }

    emailjs.send(
      'outlook',
      'template_syJiFl0K',
      templateParams,
      'user_4vHlLaKvbyuIPCxvoieQ5'
    )
    resetForm()
  }


const resetForm = () => {
  setName('')
  setEmail('')
  setMessage('')
}


console.log(file)


  return (
    <GradientBackground>
      <NavBar />
      <Grid container align="center" className={classes.containerStyle}>
        <Paper className={classes.boxStyle}>
          <form className={classes.formSize} id="former">
            <Typography variant="h5" className={classes.textStyle}>
              Contact Us/Submit Application
            </Typography>
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
            <FormControl
              margin="normal"
              required
              fullWidth
              className={classes.formControlStyle}
            >
              <InputLabel htmlFor="email">You Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                value={email}
                onChange={OnChangeEmail}
              />
            </FormControl>
            <FormControl>
              <input name="image" type="file" onChange={OnChangeFile} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                id="full-width-text-field"
                label="Type your message here..."
                multiline
                variant="outlined"
                rows="8"
                defaultValue={message}
                onChange={OnChangeMessage}
              />
            </FormControl>
            <Button
              variant="contained"
              className={classes.buttonStyle}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </GradientBackground>
  );
};

export default ContactPage;
