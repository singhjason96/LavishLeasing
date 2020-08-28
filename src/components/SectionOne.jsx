import React from "react";
import { Grid, Typography, Container, Tooltip, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Parallax } from "react-scroll-parallax";
import ArrowScroll from "./ArrowScroll";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

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
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url(https://pictures.dealer.com/m/mercedesbenzofcoloradospringsmb/0537/c83c74d8334c80cbe2d3dd0fd1181efcx.jpg)",
    backgroundSize: "cover",
    backgroundColor: "#0d0d0d",
    opacity: "0.7",
    fontSize: "8px",
  },
  mobileTextbox: {
    width: '100%',
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
    color: "white",
  },
  mobileText: {
    fontFamily: "Roboto Slab, serif",
    color: "white",
    fontSize: '14px'
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
    <>
      <Default>
        <Grid container className={classes.section}>
          <Grid item xs={6} className={classes.itemOne} align="center">
            <Typography className={classes.header}>
              Lease or finance your car today!
            </Typography>
            <Container className={classes.textBox}>
              <Typography className={classes.text}>
                Looking to get a new car? Ready to end your lease early? Let us
                help you! Lease or finance with Lavish Leasing and save time and
                money! No wasted time in dealerships, no bait and switch and no
                hidden fees! We are trustworthy, reliable and here to give you
                the best car buying experience! Ready to get started? Submit
                your credit application and we’ll give you a call!I
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={6} align="center">
            <Container className={classes.itemTwo}></Container>
          </Grid>
        </Grid>
      </Default>
      <Mobile>
        <Grid container className={classes.section} >
          <Grid item  className={classes.itemOne} align="center">
            <Typography className={classes.header}>
              Lease or finance your car today!
            </Typography>
            <Container className={classes.mobileTextbox} >
              <Typography className={classes.mobileText}>
                Looking to get a new car? Ready to end your lease early? Let us
                help you! Lease or finance with Lavish Leasing and save time and
                money! No wasted time in dealerships, no bait and switch and no
                hidden fees! We are trustworthy, reliable and here to give you
                the best car buying experience! Ready to get started? Submit
                your credit application and we’ll give you a call!I
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={6} align="center">
            <Container className={classes.itemTwo}></Container>
          </Grid>
        </Grid>
      </Mobile>
    </>
  );
};

export default SectionOne;
