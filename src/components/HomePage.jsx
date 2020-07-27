import React from "react";
import SectionOne from "./SectionOne";
import GradientBackground from "./GradientBackground";
import NavBar from "./NavBar";
import About from "./About";
import TestimonialsSnippet from "./TestimonialsSnippet";
import { Container } from "@material-ui/core";

const HomePage = () => {
  return (
    <GradientBackground>
      <NavBar />
      <SectionOne />
      <About />
      <TestimonialsSnippet />
    </GradientBackground>
  );
};

export default HomePage;
