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
    height: '75vh',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '32px',
    justifyContent: 'space-between',
    marginTop: '15%'
  },
  header: {
    fontFamily: "Roboto Slab, serif",
    color: "white",
    textAlign: "center",
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
  },
  boxOne: {
    backgroundColor: "black",
    padding: "16px",
    opacity: "0.7",
    justifyContent: 'space-between',
    padding: '16px'

  },
  boxTwo: {
    backgroundColor: "#0066cc",
    padding: "16px",
    opacity: "0.7",
    justifyContent: 'space-between',
    padding: '16px'
  },
  gridStyle: {
    margin: 'auto',
    justifyContent: 'space-between',
    padding: '48px'
  },
  indGrid: {
    margin: theme.spacing(2),

  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.contain}>
        <Grid item xs={6} className={classes.gridStyle}>
          <Box className={classes.boxOne}>
            <Grid container className={classes.indGrid}>
              <Grid item xs={6} >
                <Typography variant="h4" className={classes.subHeader}>
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
                <Typography variant="h4" className={classes.subHeader}>
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
    </>
  );
};

export default About;
