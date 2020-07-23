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
      <Typography>
        Toby is in HR, which technically means he works for corporate, so he's
        really not a part of our family. Also, he's divorced, so he's really not
        a part of his family.
      </Typography>
    </Grid>
  );
};

export default About;
