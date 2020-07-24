import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import firebase from "./Firebase";

export const AddTestimonials = () => {
  var [data, setData] = useState([]);
  var [name, setName] = useState("");
  var [message, setMessage] = useState("");

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

  console.log("item name", name);
  console.log("this is the food data", data);

  return (
    <form>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="name">Name of Person</InputLabel>
        <Input id="name" name="name" value={name} onChange={OnChangeName} />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <TextField
          id="full-width-text-field"
          label="Type your story here..."
          multiline
          variant="outlined"
          rows="8"
          defaultValue={message}
          onChange={OnChangeMessage}
        />
      </FormControl>
      <Button onClick={onSubmit}>Submit</Button>
    </form>
  );
};
