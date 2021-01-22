import React, {Component} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../components/createComponents/card';
import VoteGrid from '../components/createComponents/VoteGrid';
import PollForm from '../components/createComponents/PollForm';
import axios from 'axios';

// basically similar to a todo form, except that UI is different, and also the button moves along with the new generated card

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

class Vote extends Component {
  state = {
    poll_id: null,
    poll_name: "",
    password: ""
  }
  componentDidMount() {
    let id = this.props.match.params.poll_id
    console.log(id)
    this.setState({
      poll_id: id
    })
    console.log(this.state.poll_id)
  }

  _create_poll_name = (new_poll_name) => {
    this.setState({poll_name: new_poll_name});
  }

  _create_password = (new_password) => {
    this.setState({password: new_password});
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
                  <h4>Create Poll Here {console.log(this.state.poll_id)} </h4>
                  <PollForm 
                    set_poll_name = {this._create_poll_name} 
                    set_password = {this._create_password}
                    poll_id = {this.state.poll_id}
                  />
                </Paper>
              </Grid>
                
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <h4>Fill Out Options Here</h4>
                  <VoteGrid poll_id = {this.state.poll_id}/>
                </Paper>
              </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

Vote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Vote);



