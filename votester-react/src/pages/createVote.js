import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../components/createComponents/card';
import VoteGrid from '../components/createComponents/VoteGrid';
import Form from '../components/createComponents/Form';
import $ from 'jquery';
import {BrowserRouter as Router, Link, Route, useParams } from 'react-router-dom';

// basically similar to a todo form, except that UI is different, and also the button moves along with the new generated card


class Vote extends Component {
  state = {
    id: null
  }
  componentDidMount() {
    let id = this.props.match.params.poll_id
    console.log(id)
  }

  render() {
    return (
      <Route path="/:pollid">
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
        </div>
      </Route>
    )
  }
}

export default Vote;



