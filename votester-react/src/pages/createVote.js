import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../components/createComponents/card';
import VoteGrid from '../components/createComponents/VoteGrid';
import Form from '../components/createComponents/Form';
import $ from 'jquery';

// basically similar to a todo form, except that UI is different, and also the button moves along with the new generated card

const Vote = () => {
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
    </div>
  )
}

export default Vote;



