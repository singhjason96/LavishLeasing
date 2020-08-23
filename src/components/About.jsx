import React from "react";
import {
  Grid,
  Typography,
  Container,
  Card,
  Box,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contain: {
    flexDirection: "row",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    padding: "32px",
    justifyContent: "space-between",
  },
  bigContainer: {
    height: "100%",
    background:
      "url(https://pictures.topspeed.com/IMG/jpg/201707/2018-rolls-royce-phantom-20.jpg)",
    backgroundSize: "cover",
    maxWidth: "100% !important",
    backgroundColor: "#0d0d0d",
    opacity: "0.7",
    align: "center",
    justifyContent: "center",
    ["@media (min-width:780px)"]: {
      height: "75vh",
      background:
        "url(https://pictures.topspeed.com/IMG/jpg/201707/2018-rolls-royce-phantom-20.jpg)",
      backgroundSize: "cover",
      maxWidth: "100% !important",
      backgroundColor: "#0d0d0d",
      opacity: "0.7",
    },
  },
  header: {
    fontFamily: "Roboto Slab, serif",
    color: "white",
    textAlign: "center",
  },

  containingStyle: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-between",
    ["@media (min-width:780px)"]: {
      display: "flex",
      flexDirection: "row",
    },
  },

  item: {
    margin: theme.spacing(2),
    padding: "16px",
  },
  subHeader: {
    fontFamily: "Roboto Slab, serif",
    color: "white",
    textAlign: "center",
    marginTop: "48px",
  },
  description: {
    fontFamily: "Roboto Slab, serif",
    color: "white",
    fontSize: "12px",
  },
  boxOne: {
    backgroundColor: "black",
    opacity: "0.7",
    width: "250px",
    ["@media (min-width:780px)"]: {
      backgroundColor: "black",
      padding: "16px",
      opacity: "0.7",
      justifyContent: "space-between",
      padding: "16px",
      width: "400px",
    },
  },
  boxTwo: {
    backgroundColor: "#0066cc",
    opacity: "0.7",
    width: "250px",
    ["@media (min-width:780px)"]: {
      backgroundColor: "#0066cc",
      padding: "16px",
      opacity: "0.7",
      justifyContent: "space-between",
      padding: "16px",
      width: "400px",
    },
  },
  gridStyle: {
    padding: "0px !important",
    ["@media (min-width:780px)"]: {
      margin: "auto !important",
      justifyContent: "space-between",
      padding: "128px",
    },
  },
  gridStyleOne: {
    padding: "0px !important",
    ["@media (min-width:780px)"]: {
      margin: "auto !important",
      justifyContent: "space-between",
      padding: "128px !important",
    },
  },
  indGrid: {
    margin: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.bigContainer} justify="center" align="center">
      <Typography className={classes.header} variant="h3">
        Our Services
      </Typography>
      <Grid
        container
        className={classes.containingStyle}
        justify="center"
        align="center"
      >
        <Grid item xs={6} className={classes.gridStyleOne}>
          <Box className={classes.boxOne}>
            <Grid container className={classes.indGrid}>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.subHeader}>
                  What We Do
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" className={classes.description}>
                  Lavish Leasing is a family owned and operated auto leasing
                  company with over 20 years of sales experience. It is Lavish
                  Leasing’s mission to make your car shopping experience as
                  swift, luxurious and inexpensive as possible. With our
                  award-winning sales record and 5-star rated customer service,
                  you are DESTINED to feel like family when you LEASE WITH
                  LAVISH!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.gridStyle}>
          <Box className={classes.boxTwo}>
            <Grid container className={classes.indGrid}>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.subHeader}>
                  How We Do It
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" className={classes.description}>
                  With our White Glove service, you won’t ever have to step foot
                  in an overwhelming, aggressive car dealership again! Not only
                  will we save you valuable time, we are also dedicated to
                  saving you money by giving you the best deal in town. We are
                  able to obtain any make and model, so your dream car is always
                  within reach.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
