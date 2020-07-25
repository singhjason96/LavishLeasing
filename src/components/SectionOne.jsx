import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "400px",
    fontFamily: "Roboto Slab, serif",
    fontSize: "4em",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    marginTop: "32px",
    fontWeight: "bold",
  },
  section: {
    height: "75vh",
    marginTop: '64px'
  },
  textBox: {
    marginTop: "32px",
    width: "400px",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    color: "white",
    opacity: "0.7",
  },
  text: {
    fontFamily: "Roboto Slab, serif",
    opacity: "0.7",
  },
  imgPic: {
    width: "400px",
    marginTop: "96px",
  },
  itemTwo: {
    justify: "center",
  },
}));

const SectionOne = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.section}>
      <Grid item xs={6} className={classes.itemOne} align="center">
        <Typography className={classes.header}>
          Lease or finance your car today
        </Typography>
        <Container className={classes.textBox}>
          <Typography className={classes.text}>
            Toby is in HR, which technically means he works for corporate, so
            he's really not a part of our family. Also, he's divorced, so he's
            really not a part of his family.
          </Typography>
        </Container>
      </Grid>
      <Grid item xs={6} align="center">
        <Container className={classes.itemTwo}>
          <img
            className={classes.imgPic}
            src="https://www.pngkit.com/png/full/681-6813019_mercedes-benz-clipart-convertible-black.png"
          />
        </Container>
      </Grid>
    </Grid>
  );
};

export default SectionOne;
