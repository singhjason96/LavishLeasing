import React from "react";
import SectionOne from "./SectionOne";
import GradientBackground from "./GradientBackground";
import NavBar from "./NavBar";
import About from "./About";
import { AddTestimonials } from "../components/AddTestimonials";
import TestimonialsSnippet from "./TestimonialsSnippet";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  itemOne: {
    width: "1000px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: '32px'
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <GradientBackground>
      <NavBar />
      <Container align="center">
        <img src={require("./logo.png")} className={classes.itemOne} />
      </Container>
      <About />
      <TestimonialsSnippet />
    </GradientBackground>
  );
};

export default HomePage;
