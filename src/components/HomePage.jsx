import React from "react";
import SectionOne from "./SectionOne";
import GradientBackground from "./GradientBackground";
import NavBar from "./NavBar";
import About from "./About";
import { AddTestimonials } from "../components/AddTestimonials";
import TestimonialsSnippet from "./TestimonialsSnippet";
import { Container } from "@material-ui/core";

const HomePage = () => {
  return (
    <GradientBackground>
      <NavBar />
      <Container>
        <SectionOne />
      </Container>
      <Container>
        <TestimonialsSnippet />
      </Container>
      <About />
    </GradientBackground>
  );
};

export default HomePage;
