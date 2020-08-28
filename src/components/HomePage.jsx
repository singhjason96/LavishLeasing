import React from "react";
import SectionOne from "./SectionOne";
import GradientBackground from "./GradientBackground";
import NavBar from "./NavBar";
import About from "./About";
import TestimonialsSnippet from "./TestimonialsSnippet";
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
  backStyle: {
    overflowX: 'hidden'
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <GradientBackground className={classes.backStyle}>
      <Desktop>
        <NavBar />
        <SectionOne />
        <About />
        <TestimonialsSnippet />
      </Desktop>
      <Tablet>
        <NavBar />
        <SectionOne />
        <About />
        <TestimonialsSnippet />
      </Tablet>
      <Mobile>
        <NavBar />
        <SectionOne />
        <About />
        <TestimonialsSnippet />
      </Mobile>
    </GradientBackground>
  );
};

export default HomePage;
