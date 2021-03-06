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
  Container,
  Grid,
} from "@material-ui/core";
import firebase from "./Firebase";
import GradientBackground from "./GradientBackground";
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  backgroundStyle: {
    height: '100vh !important'
  },
  contain: {
      margin: theme.spacing(2)
  },
  indCard:{
    display: 'flex',
    flexDirection: 'column',
      opacity: '0.7',
      padding: '24px',
      ["@media (min-width:780px)"]: {
        display: 'flex',
        flexDirection: 'row',
        opacity: '0.7',
        padding: '24px',
        width: '400px'
      },

  },
  titleStyle: {
      padding: '32px',
      fontFamily: "Roboto Slab, serif",
      color: 'white',
      paddingTop: '72px'
  },
  textStyle: {
    fontFamily: "Roboto Slab, serif",
  },
}));

const AllTestimonials = () => {
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
    <GradientBackground className={classes.backgroundStyle}>
      <NavBar />
      <Container >
        <Typography variant="h3" align="center" className={classes.titleStyle}>
          Testimonials
        </Typography>
        <Grid container alignItems="center" justify="center">
          {data.map((el) => {
            return (
              <Grid item  className={classes.contain}>
                <Card variant="outlined" className={classes.indCard}>
                  <CardContent>
                    <Typography variant="h5" className={classes.textStyle}>{el.personMessage}</Typography>
                    <Typography variant="body2" className={classes.textStyle}>{el.personName}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </GradientBackground>
  );
};

export default AllTestimonials;
