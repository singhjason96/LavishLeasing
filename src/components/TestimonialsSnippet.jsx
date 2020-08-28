import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
} from "@material-ui/core";
import firebase from "./Firebase";
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
  cards: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  mobileCards: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-between",
  },
  indCard: {
    margin: theme.spacing(2),
    opacity: "0.7",
    padding: "24px",
  },
  contain: {
    marginTop: "32px",
    paddingBottom: "32px",
    opacity: "0.7",
  },
  header: {
    fontFamily: "Roboto Slab, serif",
    color: "white !important",
    padding: "32px",
  },
  textStyle: {
    fontFamily: "Roboto Slab, serif",
  },
}));

const TestimonialsSnippet = () => {
  var [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const ref = firebase.database().ref(`testimonials/`);
    ref.on("value", (snapshot) => {
      const dbTestimonials = snapshot.val();
      const testimonialsClean = Object.values(dbTestimonials);
      setData(testimonialsClean);
    });
  }, []);

  return (
    <>
      <Default>
        <Container className={classes.contain}>
          <Typography variant="h3" align="center" className={classes.header}>
            Testimonials
          </Typography>
          <div className={classes.cards}>
            {data.slice(Math.max(data.length - 3, 0)).map((el) => {
              return (
                <Card variant="outlined" className={classes.indCard}>
                  <CardContent>
                    <Typography variant="h5" className={classes.textStyle}>
                      {el.personMessage}
                    </Typography>
                    <Typography variant="body2">{el.personName}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Default>
      <Mobile>
        <Container className={classes.contain}>
          <Typography variant="h3" align="center" className={classes.header}>
            Testimonials
          </Typography>
          <div className={classes.mobileCards}>
            {data.slice(Math.max(data.length - 3, 0)).map((el) => {
              return (
                <Card variant="outlined" className={classes.indCard}>
                  <CardContent>
                    <Typography variant="h5" className={classes.textStyle}>
                      {el.personMessage}
                    </Typography>
                    <Typography variant="body2">{el.personName}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Mobile>
    </>
  );
};

export default TestimonialsSnippet;
