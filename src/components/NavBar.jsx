import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import MyPdf from './test.pdf'
import AppBarCollapse from './AppBarCollapse';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    ["@media (min-width:780px)"]: {
      flexGrow: 1,
    },
  },
  menuButton: {
    display: 'flex',
    ["@media (min-width:780px)"]: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
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
      <AppBar position="absolute" style={{ background: 'transparent', boxShadow: 'none', paddingRight: '32px'}}>
        <Toolbar className={classes.menuButton}>
        <Link to='/'><img src={require('./logo.png')} className={classes.itemOne} /></Link>
        <AppBarCollapse />
        </Toolbar>
      </AppBar>
    </div>
  );
}