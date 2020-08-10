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
    align: 'center',
    justifyContent:'center',
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
    flexDirection: 'column',
    display: "flex",
    justifyContent: 'space-between',
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
    padding: "16px",
    opacity: "0.7",
    justifyContent: "space-between",
    padding: "16px",
    width: '200px',
    ["@media (min-width:780px)"]: {
      backgroundColor: "black",
      padding: "16px",
      opacity: "0.7",
      justifyContent: "space-between",
      padding: "16px",
      width: '100%'
    },
  },
  boxTwo: {
    backgroundColor: "#0066cc",
    padding: "16px",
    opacity: "0.7",
    justifyContent: "space-between",
    padding: "16px",
    width: '200px',
    ["@media (min-width:780px)"]: {
      backgroundColor: "#0066cc",
      padding: "16px",
      opacity: "0.7",
      justifyContent: "space-between",
      padding: "16px",
      width: '100%'
    },
  },
  gridStyle: {
    margin: "auto",
    justifyContent: "space-between",
    padding: "128px",
  },
  gridStyleOne: {
    margin: "auto",
    justifyContent: "space-between",
    padding: "128px",
  },
  indGrid: {
    margin: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.bigContainer}>
      <Typography className={classes.header} variant="h3">
        Our Services
      </Typography>
      <Grid container className={classes.containingStyle}>
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
                  In Japan, heart surgeon. Number one. Steady hand. One day,
                  yakuza boss need new heart. I do operation. But, mistake!
                  Yakuza boss die. Yakuza very mad. I hide in fishing boat, come
                  to America. No English, no food, no money. Darryl give me job.
                  Now I have house, American car, and new woman. Darryl save
                  life. My big secret: I kill yakuza boss on purpose. I good
                  surgeon. The best!
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
                  In Japan, heart surgeon. Number one. Steady hand. One day,
                  yakuza boss need new heart. I do operation. But, mistake!
                  Yakuza boss die. Yakuza very mad. I hide in fishing boat, come
                  to America. No English, no food, no money. Darryl give me job.
                  Now I have house, American car, and new woman. Darryl save
                  life. My big secret: I kill yakuza boss on purpose. I good
                  surgeon. The best!
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
