import React , { useEffect , useState } from 'react';

import { Typography, Container , Grid , Card , CardMedia , CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const URL ="https://api.airtable.com/v0/appIgDm5muOF5pp9f/arts";
const API_KEY ="keyP1d65emmlZSGkZ";

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

export function ArtsDisplay(){

    const classes = useStyles();
    const [state,setState] = useState()

    useEffect(()=>{
         fetch(URL,{
             headers:{
                Authorization:`Bearer ${API_KEY}`
             }
         }).then(response=>{
             response.json().then(json=>{
                 setState(json.records)
             })
         })
    },[])

    return(
        <React.Fragment>
                <Container maxWidth="md"  className={classes.contentDisplay}>
                    <Grid container spacing={4}>
                      {
                          state &&
                          state.map(data=>(
                                <Grid item key={data.id} xs={12} sm={6} md={4}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={data.fields.image[0].url}
                                                title={data.fields.title}
                                            />
                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5" component="h2" align="center">
                                                    {data.fields.title}
                                                </Typography>
                                                <Typography align="center">
                                                    {data.fields.description}
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