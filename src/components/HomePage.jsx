import React from "react";
import SectionOne from "./SectionOne";
import GradientBackground from "./GradientBackground";
import NavBar from "./NavBar";
import About from "./About";
import TestimonialsSnippet from "./TestimonialsSnippet";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bodyShift: {
    position: 'fixed'
  }
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <GradientBackground className={classes.bodyShift}>
      <NavBar />
      <SectionOne />
      <About />
      <TestimonialsSnippet />
    </GradientBackground>
  );
};

export default HomePage;
