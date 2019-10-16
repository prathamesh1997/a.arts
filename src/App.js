import React from 'react';

import { Header , Footer } from './shared';
import { Arts , ArtsDisplay } from './components';

import { makeStyles , createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Whatsapp } from './static/svg';

import './App.css'

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

export default App;
