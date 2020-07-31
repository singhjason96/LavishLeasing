import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    flexGrow: 1,
  },
  itemOne: {
    width: '100px',
    marginLeft: '32px'
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'white'
  }
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar className={classes.menuButton}>
        <Link to='/'><img src={require('./logo.png')} className={classes.itemOne} /></Link>
        <Link to='/alltestimonials' className={classes.linkStyle}><Typography>Testimonials</Typography></Link>
        <Typography>Gallery</Typography>
        <Link to='/contact' className={classes.linkStyle}><Typography>Contact</Typography></Link>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}