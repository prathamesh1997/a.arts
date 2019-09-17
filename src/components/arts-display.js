import React from 'react';

import { Typography, Container , Grid , Card , CardMedia , CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import Brooch_1 from '../static/images/brooch_1.jpg';
import Niranjan_1 from '../static/images/niranjan_1.jpg';
import Niranjan_2 from '../static/images/niranjan_2.jpg';
import Ganpati from '../static/images/ganpati.jpg';
import Brooch_2 from '../static/images/brooch_2.jpg';
import Rumal_1 from '../static/images/rumal_1.jpg';
import Brooch_3 from '../static/images/brooch_3.jpg';
import Bangles_1 from '../static/images/bangles_1.jpg';
import Decor_1 from '../static/images/decr_1.jpg';
import WoolCraft_1 from '../static/images/wool_craft_1.jpg';
import WoolCraft_2 from '../static/images/wool_craft_2.jpg';
import WoolCraft_3 from '../static/images/wool_craft_3.jpg';

const useStyles = makeStyles(theme=>({
    contentDisplay:{
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardMedia:{
        paddingTop: '56.25%',
    },
    cardContent:{
        flexGrow:1
    }
}));

const cards =[{image:`${Brooch_1}`,title:'Brooch',description:'Hand made Brooch'},
              {image:`${Niranjan_1}`,title:'Niranjan',description:'Haldi kunku Dish.'},
              {image:`${Niranjan_2}`,title:'Niranjan.',description:'Haldi Kunku Dish.'},
              {image:`${Ganpati}`,title:'Ganpati Bappa',description:'Ganpati murti.'},
              {image:`${Brooch_2}`,title:'Brooch',description:'Hand made Brooch'},
              {image:`${Rumal_1}`,title:'Woolen craft',description:'Made by wool.'},
              {image:`${Brooch_3}`,title:'Brooch',description:'Hand made Brooch'},
              {image:`${Bangles_1}`,title:'Bangles',description:'Hand made Bangles'},
              {image:`${Decor_1}`,title:'Decorative Material',description:'Hand made Decorative Material'},
              {image:`${WoolCraft_1}`,title:'Woolen craft',description:'Made by wool'},
              {image:`${WoolCraft_2}`,title:'Woolen craft',description:'Made by wool'},
              {image: `${WoolCraft_3}`,title:'Woolen craft',description:'Made by wool'},
            ]

export function ArtsDisplay(){

    const classes = useStyles();

    return(
        <React.Fragment>
                <Container maxWidth="md"  className={classes.contentDisplay}>
                    <Grid container spacing={4}>
                       {
                           cards.map(data=>(
                                    <Grid item key="123" xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={data.image}
                                            title={data.title}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                                {data.title}
                                            </Typography>
                                            <Typography align="center">
                                                {data.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                           ))
                       }
                    </Grid>
                </Container>
        </React.Fragment>
    )
}