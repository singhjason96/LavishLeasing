import React from "react";
import { Grid, Typography, Container, Tooltip, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Parallax } from "react-scroll-parallax";
import ArrowScroll from "./ArrowScroll";

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
    ["@media (min-width:780px)"]: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      opacity: "0.7",
      backgroundColor: "#0d0d0d",
    },
    width: "100%",
    backgroundImage:
      "url(https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/0537/c83c74d8334c80cbe2d3dd0fd1181efcx.jpg)",
    backgroundSize: "cover",
    backgroundColor: "#0d0d0d",
    opacity: "0.7",
    fontSize: "8px",
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
    color: 'white'
  },
  imgPic: {
    width: "400px",
    marginTop: "96px",
  },
  itemTwo: {
    justify: "center",
  },
  itemOne: {
    marginTop: "136px",
  },
}));

const SectionOne = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.section}>
      <Grid item xs={6} className={classes.itemOne} align="center">
        <Typography className={classes.header}>
          Lease or finance your car today!
        </Typography>
        <Container className={classes.textBox}>
          <Typography className={classes.text}>
            Looking to get a new car? Ready to end your lease early? Let us help
            you! Lease or finance with Lavish Leasing and save time and money!
            No wasted time in dealerships, no bait and switch and no hidden
            fees! We are trustworthy, reliable and here to give you the best car
            buying experience! Ready to get started? Submit your credit
            application and we’ll give you a call!I
          </Typography>
        </Container>
      </Grid>
      <Grid item xs={6} align="center">
        <Container className={classes.itemTwo}></Container>
      </Grid>
    </Grid>
  );
};

export default SectionOne;
