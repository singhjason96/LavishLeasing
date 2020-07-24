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

const TestimonialsSnippet = () => {
  var [data, setData] = useState([]);

  useEffect(() => {
    const ref = firebase.database().ref(`testimonials/`);
    ref.on("value", (snapshot) => {
      const dbTestimonials = snapshot.val();
      const testimonialsClean = Object.values(dbTestimonials);
      setData(testimonialsClean);
    });
  });

  return (
    <div>
      {data.map((el) => {
        return <div>{el.personName}</div>;
      })}
    </div>
  );
};

export default TestimonialsSnippet;
