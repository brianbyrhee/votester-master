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
    poll_name: "",
    poll_id: this.props.poll_id,
  }

  componentDidMount() {
  }

  pollnameChange = (e) => {
    //console.log(e.target.value)
    this.setState({poll_name: e.target.value, password: this.state.password});
  }

  handleSubmit = (e) => {
    this._handleSubmit(e);
  }

  async _handleSubmit(e) {
    e.preventDefault();
    console.log("Poll Name: " + this.state.poll_name);
    this.props.set_poll_name(this.state.poll_name);
    console.log(this.state.poll_id)
    var poll = {
      poll_name: this.state.poll_name,
      poll_id: this.state.poll_id
    }
    console.log(poll)

    axios.post('http://localhost:5000/database/add', poll)
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
              name="pollname"
              label="Poll Name"
              type="pollname"
              id="pollname"
              autoComplete="pollname"
              autoFocus
              defaultValue={this.state.poll_name} 
              onChange={this.pollnameChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {this.handleSubmit}
            >
              Confirm Info
              {this.state.poll_id} 
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
