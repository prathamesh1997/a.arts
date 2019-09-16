import  React from 'react';
import { AppBar , Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { IoIosFlower } from 'react-icons/io'

import '../static/css/header.css'

const useStyles =  makeStyles(theme=>({
   
}))

export function Header(props){
        const classes =  useStyles()
        
        return(
            <React.Fragment>
                <AppBar position="relative">
                    <Toolbar>
                            <IoIosFlower size="25" color="White"/>
                            <Typography variant="h6" color="inherit" noWrap className="icon">A.Arts</Typography>
                    </Toolbar>
                </AppBar>
                {props.children}
            </React.Fragment>
        )
}