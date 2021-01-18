import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Navbar/card';
import VoteGrid from '../components/Navbar/VoteGrid';
import Form from '../components/Navbar/Form';
import $ from 'jquery';

// basically similar to a todo form, except that UI is different, and also the button moves along with the new generated card
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'gray',
  },
}));



const Vote = () => {
  const classes = useStyles();

  const clone = (e) => {
    //clones button and subsequent root properties
  }


  const addVote = (e) => {
    e.preventDefault();
    var d = document.getElementById('cards')
    var itm = d.lastChild;
    var cln = itm.cloneNode(true);
    //cln.onClick = itm.onClick
    //var cln = < Card />
    d.appendChild(cln);
  }

  return (
    <div 
      style = {{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '90vh'
      }}
    >
      {/* <h1>Create Vote</h1> */}
      <div className = 'vote-app'>
        <VoteGrid />
      </div>
      <div className={classes.root} class = "voteGrid">
        <Grid 
          id = "cards"
          container spacing={4} 
          justify = "space-evenly"
          alignItems = "stretch"
        >
          <Grid item xs={1} sm>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Card />
          <Grid item xs={1} sm>
            <Paper className={classes.paper}><button onClick = {addVote} id = "add">Add vote</button></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Vote;



