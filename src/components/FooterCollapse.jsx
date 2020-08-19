import React from "react";
import { Button, MenuItem, Typography} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import {Link} from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';

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

const FooterCollapse = props => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem><EmailIcon /> <Typography>info@lavishleasingauto.com</Typography></MenuItem>
      <MenuItem><EmailIcon /> <Typography>info@lavishleasingauto.com</Typography></MenuItem>
      <MenuItem><EmailIcon /> <Typography>info@lavishleasingauto.com</Typography></MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
    <Button color="inherit"><EmailIcon /> <Typography>info@lavishleasingauto.com</Typography></Button>
    <Button color="inherit"><EmailIcon /> <Typography>info@lavishleasingauto.com</Typography></Button>
    <Button color="inherit"><EmailIcon /> <Typography>info@lavishleasingauto.com</Typography></Button>



      
    </div>
  </div>
);

export default withStyles(styles)(FooterCollapse);