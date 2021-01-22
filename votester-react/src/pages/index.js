import React from 'react';
import {Text} from 'react-native';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import createVote from './createVote';
import {Link} from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';

const useStyles = makeStyles(theme => ({}));

const Home = () => {
  const classes = useStyles();
  const pollid = (Math.random()*1e16).toString(36);
  return (
    <div 
      style = {{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '90vh'
      }}
    >
      <Box textAlign='center'>
        <Text>
          <h1>V o t e s t e r . i o</h1>
          {"\n"}
          {"\n"}
          <Link to = {"./createVote/" + pollid} style={{ textDecoration: 'none' }}>
          <Button 
            // style={{justifyContent: 'center'}} 
          >
            Let's get started!
          </Button>
          </Link>
          
        </Text>
      </Box>
    </div>
  )
}

export default Home;
