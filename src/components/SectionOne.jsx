import React from "react";
import { Grid, Typography, Container, Tooltip, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  itemOne: {
    width: '50%',
    marginTop: '10%',

  },
  section: {
    justifyItems: 'center',
    alignContent: 'center'
  }
 
}));

const SectionOne = () => {
  const classes = useStyles();
  return (
    <Container className={classes.section} justify="center" align="center">
      <img src={require('./logo.png')} className={classes.itemOne} />
    </Container>
  );
};

export default SectionOne;
