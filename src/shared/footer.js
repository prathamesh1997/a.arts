import React from 'react';

import { Typography , Link  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          A.Arts
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles(theme=>({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
}));

export function Footer(){

    const classes = useStyles();

    return(
        <React.Fragment>
            <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                 Contact Us or Whatsapp for orders
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                 +91 9619559916
             </Typography>
             <Copyright />
            </footer>
        </React.Fragment>
    )
}