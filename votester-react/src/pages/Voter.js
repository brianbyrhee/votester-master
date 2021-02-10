import React, {Component} from 'react';
import VoteGrid from '../components/voter/VoteGrid';
import VoterLogin from '../components/voter/VoterLogin';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

//Note that you dont need routing parameters for voters here, as we're not really retrieving data; 
// all we need to do is record the voter user and post it when submitting vote

//we need to get name from VoterLogin, and then check if name exists in the DB
//note that if the name doesn't exist in the DB, then we need to post the name
// ^^ this task must be done in VoterLogin, and handle it using helper functions

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Voter extends Component {
  // you need 3 states; not logged in, voted and not voted
  state = {
    voter_status: "not logged in"
  }

  _changeVoteState = (voter_state) => {
    if (voter_state) {
      console.log("voter voted here")
      this.setState({voter_status: "voted"});
    }
    else {
      console.log("voter has not voted yet")
      this.setState({voter_status: "not voted"})
    }
    
  }

  render() {
    const {classes} = this.props;
    return (
      <div
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '90vh'
        }}
      >

        <div className={classes.root}>
          <Grid container spacing={10} direction="row" justify="center">
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <h4>Log In</h4>
                <VoterLogin votedState = {this.state.voter_status} changeVoteState = {this._changeVoteState}/>  
              </Paper>
            </Grid>
          
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <VoteGrid votedState = {this.state.voter_status}/>
              </Paper>
            </Grid>
          </Grid>
          <h4>Vote state is {this.state.voter_status}</h4>
        </div>
      </div>
    )
  };
}

Voter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Voter);
