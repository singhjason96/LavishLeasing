import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  Typography,
  Container
} from "@material-ui/core";
import firebase from "./Firebase";

const useStyles = makeStyles((theme) => ({
  cards: {
    flexDirection: 'row',
    display: "flex",
    justifyContent: 'space-between',
    marginTop: '32px'
  },
  indCard: {
    margin: theme.spacing(2),
    opacity: "0.7"
  },
  contain: {
    marginTop: '32px',
    paddingBottom: '32px',
    height: '55vh',
    marginTop: '10%'
  },
  header: {
    fontFamily: "Roboto Slab, serif",
    color: 'white !important'
  },
  textStyle: {
    fontFamily: "Roboto Slab, serif",

  }
}));

const TestimonialsSnippet = () => {
  var [data, setData] = useState([]);
  const classes = useStyles();


  useEffect(() => {
    const ref = firebase.database().ref(`testimonials/`);
    ref.on("value", (snapshot) => {
      const dbTestimonials = snapshot.val();
      const testimonialsClean = Object.values(dbTestimonials);
      setData(testimonialsClean);
    });
  }, []);

  return (
    <Container className={classes.contain}>
      <Typography variant="h3" align="center" className={classes.header}>Testimonials</Typography>
      <div className={classes.cards}>
      {data.slice(Math.max(data.length - 3, 0)).map((el) => {
        return (
          <Card variant="outlined" className={classes.indCard}>
            <CardContent>
              <Typography variant="h5" className={classes.textStyle}>{el.personMessage}</Typography>
              <Typography variant="body2">{el.personName}</Typography>
            </CardContent>
          </Card>
        )
      })}
      </div>
    </Container>
  );
};

export default TestimonialsSnippet;
