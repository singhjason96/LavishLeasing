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
  contain: {
    flexDirection: "row",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    padding: "32px",
    justifyContent: "space-between",
  },
  mobile: {
    flexDirection: "column",
  },
  mobileHeader: {
    textAlign: "center",
  },
  bigContainer: {
    height: "75vh",
    background:
      "url(https://pictures.topspeed.com/IMG/jpg/201707/2018-rolls-royce-phantom-20.jpg)",
    backgroundSize: "cover",
    maxWidth: "100% !important",
    backgroundColor: "#0d0d0d",
    opacity: "0.7",
    align: "center",
    justifyContent: "center",
  },
  mobileContainer: {
    height: "100vh",
    background:
      "url(https://pictures.topspeed.com/IMG/jpg/201707/2018-rolls-royce-phantom-20.jpg)",
    backgroundSize: "cover",
    maxWidth: "100% !important",
    backgroundColor: "#0d0d0d",
    opacity: "0.7",
    align: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "Roboto Slab, serif",
    color: "white",
    textAlign: "center",
    padding: "16px !important",
  },

  containingStyle: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginTop: '64px'
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
  mobileDesc: {
    fontSize: "14px",
    fontFamily: "Roboto Slab, serif",
    color: "white",
    padding: "16px",
  },
  boxOne: {
    backgroundColor: "black",
    opacity: "0.7",
    width: "85%",
    height: "85%",
  },
  mobileOne: {
    width: "350px",
    backgroundColor: "black",
    height: "300px",
    opacity: "0.7",
  },
  boxTwo: {
    backgroundColor: "#0066cc",
    opacity: "0.7",
    width: "85%",
    height: "85%",
  },
  gridStyle: {
    padding: "0px !important",
  },
  gridStyleOne: {
    padding: "0px !important",
    marginTop: '16px'
  },
  indGrid: {
    margin: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Default>
        <Container
          className={classes.bigContainer}
        >
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
                      company with over 20 years of sales experience. It is
                      Lavish Leasing’s mission to make your car shopping
                      experience as swift, luxurious and inexpensive as
                      possible. With our award-winning sales record and 5-star
                      rated customer service, you are DESTINED to feel like
                      family when you LEASE WITH LAVISH!
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
                      With our White Glove service, you won’t ever have to step
                      foot in an overwhelming, aggressive car dealership again!
                      Not only will we save you valuable time, we are also
                      dedicated to saving you money by giving you the best deal
                      in town. We are able to obtain any make and model, so your
                      dream car is always within reach.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Default>
      <Mobile>
        <Container className={classes.mobileContainer}>
          <Typography className={classes.header} variant="h3">
            Our Services
          </Typography>
          <Grid container className={classes.mobile}>
            <Grid item xs={6} className={classes.gridStyleOne}>
              <Box className={classes.mobileOne}>
                <Typography
                  variant="h5"
                  className={classes.mobileHeader}
                  justify="center"
                >
                  What We Do
                </Typography>
                <Typography variant="body2" className={classes.mobileDesc}>
                  Lavish Leasing is a family owned and operated auto leasing
                  company with over 20 years of sales experience. It is Lavish
                  Leasing’s mission to make your car shopping experience as
                  swift, luxurious and inexpensive as possible. With our
                  award-winning sales record and 5-star rated customer service,
                  you are DESTINED to feel like family when you LEASE WITH
                  LAVISH!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} className={classes.gridStyleOne}>
              <Box className={classes.mobileOne}>
                <Typography
                  variant="h5"
                  className={classes.mobileHeader}
                  justify="center"
                >
                  How We Do It
                </Typography>
                <Typography variant="body2" className={classes.mobileDesc}>
                  With our White Glove service, you won’t ever have to step foot
                  in an overwhelming, aggressive car dealership again! Not only
                  will we save you valuable time, we are also dedicated to
                  saving you money by giving you the best deal in town. We are
                  able to obtain any make and model, so your dream car is always
                  within reach.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Mobile>
    </>
  );
};

export default About;
