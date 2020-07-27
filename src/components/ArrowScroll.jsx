import React from "react";
import { Grid, Typography, Container, Tooltip, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Parallax } from "react-scroll-parallax";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "400px",
    fontFamily: "Roboto Slab, serif",
    fontSize: "4em",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    marginTop: "32px",
    fontWeight: "bold",
  },
  section: {
    height: "100vh",
    marginTop: "128px",
  },
  textBox: {
    marginTop: "32px",
    width: "400px",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    color: "white",
    opacity: "0.7",
  },
  text: {
    fontFamily: "Roboto Slab, serif",
    opacity: "0.7",
  },
  imgPic: {
    width: "400px",
    marginTop: "96px",
  },
  itemTwo: {
    justify: "center",
  },
}));

const ArrowScroll = () => {
  const classes = useStyles();
  return (

        <Container align="center">
          <ArrowDropDownIcon />
        </Container>
  );
};

export default ArrowScroll;
