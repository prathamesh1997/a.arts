import React , { useState , useEffect } from 'react';

import { Header , Footer } from './shared';
import { Arts , ArtsDisplay,Loader } from './components';

import {  createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Whatsapp } from './static/svg';

import './App.css'
import './static/css/loader.css'

const theme = createMuiTheme({
   palette:{
     primary:{
      main:'#1976D2'
     },
     secondary:{
       main:'#f090b2'
     }
   },
   typography:{
     fontFamily:'serif'
   }
})

function App() {
  const [loading,setLoading] = useState(false);
   
  useEffect(()=>{
     setTimeout(()=>{
        setLoading(true)
     },2000)
   },[]);

  if(loading){
    return (
      <React.Fragment>
         <ThemeProvider theme={theme}>
              <Header>
                  <Arts/>
                  <ArtsDisplay/>
              </Header>
              <Footer/>
              <a href="https://wa.me/919619559916" target="_blank">
                <Whatsapp/>
              </a>
         </ThemeProvider>
      </React.Fragment>
    );
  }
  else{
    return(
      <Loader/>
    )
  }
}

export default App;
