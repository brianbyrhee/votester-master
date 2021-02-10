import React, {useState, useRef, useEffect, Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { IoEnter } from 'react-icons/io5';
import SelectInput from '@material-ui/core/Select/SelectInput';
import Text from 'react-native';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    height: "100%",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'gray',
  },
});


class VoteGrid extends Component {
  state = {
    options: ["obama", "trump", ],
    vote: ""
  }

  submitVote = (vote) => {
    console.log("hi")
    this.setState({vote: vote})
    console.log(this.state)
  }


  submitVote = () => {
  };

  render () {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root} class = "voteGrid">
          <Grid 
          id = "cards"
          container spacing={4} 
          justify = "space-evenly"
          alignItems = "stretch"
          >
          {
            this.state.options.map((option, index) => (
              <Grid item xs={4}>
                <Paper className={classes.paper} onClick = {this.submitVote(option)}>
                  <div
                    className={option.isComplete ? 'todo-row complete' : 'todo-row'}
                    key={index}
                  >
                    <Button className = "select-vote"> { option }</Button>
                  </div>
                </Paper>
              </Grid>
            ))
          }   
          </Grid>
        </div>
        <Button 
          className = "submit-vote" 
          onClick = {console.log("ksdnjkwqnj1: ", this.state.vote)}> 
            Submit vote 
            <div className = 'icons'>
              <IoEnter
                className = 'submit-icon'
              />
            </div>
        </Button>
      </div>
      )
    }
}

VoteGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VoteGrid);

