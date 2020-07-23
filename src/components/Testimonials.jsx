import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    itemOne: {
        backgorundColor: 'red',
        height: '50vh'
    }
  }));

const Testimonials = () => {
    const classes = useStyles();
    return(
        <Grid container>
            <Grid item xs={6} >
                <Typography variant="h1">Lavish Leasing</Typography>
            </Grid>
            <Grid item xs={6}>
                <div>For real</div>
            </Grid>
        </Grid>
    )
}

export default Testimonials