import React, { Component, useState } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {Link} from 'react-router-dom';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(4),
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
});


class FindForm extends Component {
  state = {
    poll_id: "",
    password: "",
    password_state: false
  }

  componentDidMount() {
  }

  pollidChange = (e) => {
    //console.log(e.target.value)
    this.setState({poll_id: e.target.value, password: this.state.password});
  }
  passwordChange = (e) => {
    this.setState({poll_id: this.state.poll_id, password: e.target.value});
    //console.log(input)
  }

  handleSubmit = (e) => {
    this._handleSubmit(e);
  }

  async _handleSubmit(e) {
    e.preventDefault();
    console.log("Poll ID: " + this.state.poll_id);
    console.log("Password: " + this.state.password);
    axios.get('http://localhost:5000/database/' + this.state.poll_id)
      .then((response) => {
        const data = response.data
        this.setState({data: data})
        if (data === undefined || data.length === 0) {
          console.log("poll does not exist!")
        }
        else {
          console.log("poll exists!")
          if (!this.state.password) {
            //no password, redirect
            console.log("send to voter page");
          } else if (this.state.password === this.state.data[0].password) {
            //correct password, redirect
            console.log("send to admin page");
            //for good practice, don't forget to reset state
          }
          else {
            //incorrect password
            console.log("wrong password");
            this.setState({password_state: true});
          }
          console.log(this.state)
        }
      })
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
              name="poll_id"
              label="Poll ID"
              type="poll_id"
              id="poll_id"
              autoComplete="poll_id"
              autoFocus
              defaultValue={this.state.poll_id} 
              onChange={this.pollidChange}
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
              defaultValue={this.state.password} 
              onChange={this.passwordChange}
            />
            <Link to = {"/analytics/" + this.state.poll_id} style={{ textDecoration: 'none' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                //onClick = {this.handleSubmit}
              >
                Find Poll
              </Button>
            </Link>
          </form>
        </div>
      </Container>
      <h6>{this.state.password_state ? "incorrect password" : ""}</h6>
      </div>
    )
  }
}


FindForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FindForm);





// class FindForm extends Component {
//   const [input, setInput] = useState('');
//   const classes = useStyles();

//   state = {
//     poll_id: "",
//     password: 
//   }

//   const pollidChange = (e) => {
//     //console.log(e.target.value)
//     setInput({pollid: e.target.value, password: input.password});
//     //console.log(input.pollid)
//   }
//   const passwordChange = (e) => {
//     setInput({pollid: input.pollid, password: e.target.value});
//     //console.log(input)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Pollid: " + input.pollid);
//     console.log("Password: " + input.password);
//       if (!input.password) {
//         //no password, redirect
//       }
//       else if (input.password === "get password") {
//         //correct password, redirect
//       }
//       else {
//         //incorrect password
//       }

//   }

//   return (
//     <div>
//       <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="pollid"
//             label="Poll ID"
//             type="pollid"
//             id="pollid"
//             autoComplete="pollid"
//             autoFocus
//             defaultValue={input.pollid} 
//             onChange={pollidChange}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             defaultValue={input.password} 
//             onChange={passwordChange}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//             onClick = {handleSubmit}
//           >
//             Find Poll
//           </Button>
//         </form>
//       </div>
//     </Container>
//     </div>
//   )
// }

// export default FindForm;
