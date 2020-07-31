import React from "react";
import SectionOne from "./SectionOne";
import GradientBackground from "./GradientBackground";
import NavBar from "./NavBar";
import About from "./About";
import TestimonialsSnippet from "./TestimonialsSnippet";
import { Container, Tooltip } from "@material-ui/core";
import ArrowScroll from "./ArrowScroll";
import Plx from "react-plx";

const parallaxData = [
  {
    start: 1000,
    end: 1500,
    properties: [
      {
        startValue: 0,
        endValue: 700,
        property: "translateY",
      },
    ],
  },
];

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
