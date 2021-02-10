import React, { Component, useState } from "react";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(6),
    width: "100%",
    height: "100%",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class VoterLogin extends Component {
  state = {
    user_name: "",
  }

  componentDidMount() {
  }

  voterChange = (e) => {
    //console.log(e.target.value)
    this.setState({user_name: e.target.value});
  }

  handleSubmit = (e) => {
    this._handleSubmit(e);
  }

  async _handleSubmit(e) {
    e.preventDefault();
    console.log("Name: " + this.state.user_name);
    this.props.set_poll_name(this.state.user_name);

    axios.get('http://localhost:5000/voters/' + this.state.poll_id)
      .then((response) =>  {
        const voter = response.data;
        this.setState({voter_data: voter})
        if (voter === undefined || voter.length === 0) {
          console.log("voter does not exist!")
          //pass in state here
          this.props.changVoteState(false)
        }
        else {
          console.log("voter does exist, and has already voted")
          //pass in state here
          this.props.changeVoteState(true)
        }
      })


    axios.post('http://localhost:5000/database/add', this.state)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }


  render() {
    const {classes} = this.props;
    return (
      <div>
        <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="name"
              id="name"
              autoComplete="name"
              autoFocus
              defaultValue={this.state.user_name} 
              onChange={this.voterChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {this.handleSubmit}
            >
              Submit Name
            </Button>
          </form>
        </div>
      </Container>
      </div>
    )
  }
}

VoterLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VoterLogin);
