import React from "react";
import SectionOne from "./SectionOne";
import GradientBackground from "./GradientBackground";
import NavBar from "./NavBar";
import About from "./About";
import { AddTestimonials } from "../components/AddTestimonials";
import TestimonialsSnippet from "./TestimonialsSnippet";
import { Container, Tooltip } from "@material-ui/core";
import ArrowScroll from "./ArrowScroll";
import { Parallax } from "react-scroll-parallax";

const HomePage = () => {
  return (
    <GradientBackground>
      <NavBar />
        <SectionOne />
        <ArrowScroll />
        <About />
        <TestimonialsSnippet />
    </GradientBackground>
  );
};

export default HomePage;
