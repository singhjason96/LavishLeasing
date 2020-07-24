import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  itemOne: {
    backgorundColor: "red",
    height: "50vh",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid container>
 
    </Grid>
  );
};

export default About;
