import React from "react";
import { Button, MenuItem, Typography} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import {Link} from 'react-router-dom';
import MyPdf from './test.pdf'

const styles = theme => ({
  root: {
    position: "absolute",
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'white'
  },
  menuStyle: {
      color: 'black',
      textDecoration: 'none',
  }
});

const AppBarCollapse = props => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem><Link to='/alltestimonials' className={props.classes.menutStyle}>Testimonials</Link></MenuItem>
      <MenuItem><Link to='/contact' className={props.classes.menutStyle}>Contact</Link></MenuItem>
      <MenuItem><a href="https://form.jotform.com/202306735269153" className={props.classes.menutStyle}>Credit Application</a> </MenuItem>
      <MenuItem><Link to='/team' className={props.classes.menutStyle}>Team</Link></MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
    <Button color="inherit"><Link to='/alltestimonials' className={props.classes.linkStyle}>Testimonials</Link></Button>
    <Button color="inherit"><Link to='/contact' className={props.classes.linkStyle}>Contact</Link></Button>
    <Button color="inherit"><a href="https://form.jotform.com/202306735269153" className={props.classes.linkStyle}>Credit Application</a> </Button>
    <Button color="inherit"><Link to='/team' className={props.classes.linkStyle}>Team</Link></Button>



      
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);