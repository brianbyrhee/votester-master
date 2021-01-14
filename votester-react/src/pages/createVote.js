import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(30),
    textAlign: 'center',
    color: 'gray',
  },
}));


const Vote = () => {
  const classes = useStyles();
  const addVote = (e) => {
    <Grid item xs={3}>
      <Paper className={classes.paper}>xs=3</Paper>
    </Grid>
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
      <button onClick = {addVote}>Add vote</button>
      <div className={classes.root} id = "voteGrid">
        <Grid 
          container spacing={2} 
          justify = "space-evenly"
          alignItems = "stretch"
        >
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Vote;
