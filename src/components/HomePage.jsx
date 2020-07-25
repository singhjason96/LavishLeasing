import React from "react";
import SectionOne from "./SectionOne";
import GradientBackground from "./GradientBackground";
import NavBar from "./NavBar";
import About from "./About";
import { AddTestimonials } from "../components/AddTestimonials";
import TestimonialsSnippet from "./TestimonialsSnippet";
import { Container } from "@material-ui/core";
import { Parallax } from 'react-scroll-parallax';

const HomePage = () => {
  return (
    <GradientBackground>
      <NavBar />
      <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
        <SectionOne />
      </Parallax>
      <About />
      <TestimonialsSnippet />
    </GradientBackground>
  );
};

export default HomePage;
