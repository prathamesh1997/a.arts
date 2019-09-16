import React from 'react';

import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme=>({
    content:{
        backgroundColor:theme.palette.background.papers,
        padding:theme.spacing(8,0,6)
    }
}));

export function Arts(props){
    
    const classes =  useStyles();

    return(
        <React.Fragment>
           <div className={classes.content}>
           <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    A.Arts
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph> 
                   We make handmade artifacts which suits today's trends.
                </Typography>
            </Container>
           </div>
        </React.Fragment>
    );
}