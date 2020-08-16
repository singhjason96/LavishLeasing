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
    color: 'black'
  }
});

const AppBarCollapse = props => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem> <Link to='/team' className={props.classes.linkStyle}><Typography>Team</Typography></Link></MenuItem>
      <MenuItem>Signup</MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
    <Button color="inherit"><Link to='/alltestimonials'>Testimonials</Link></Button>
    <Button color="inherit"><Link to='/team'>Team</Link></Button>
    <Button color="inherit"><Link to='/contact'>Contact</Link></Button>
    <Button color="inherit"><a href={MyPdf}>Credit Application</a> </Button>


      
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);