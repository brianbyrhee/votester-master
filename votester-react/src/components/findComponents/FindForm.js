import React, { Component, useState } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function FindForm(props) {
  const [input, setInput] = useState('');
  const classes = useStyles();

  const pollidChange = (e) => {
    //console.log(e.target.value)
    setInput({pollid: e.target.value, password: input.password});
    //console.log(input.pollid)
  }
  const passwordChange = (e) => {
    setInput({pollid: input.pollid, password: e.target.value});
    //console.log(input)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Pollid: " + input.pollid);
    console.log("Password: " + input.password);
    console.log(input)
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="pollid"
            label="Poll ID"
            type="pollid"
            id="pollid"
            autoComplete="pollid"
            autoFocus
            defaultValue={input.pollid} 
            onChange={pollidChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={input.password} 
            onChange={passwordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleLogin}
          >
            Find Poll
          </Button>
        </form>
      </div>
    </Container>
    </div>
  )
}

export default FindForm;
