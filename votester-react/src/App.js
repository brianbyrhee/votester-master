import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';

function Option(props) {
  return <h2> Candidate {props.id}: {props.name}</h2>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Votester: Simple Voting App </h1>
        <Option name = "Trump" id = "1"/>
        <Option name = "Biden" id = "2"/>
      </div>
    );
  }
}

export default App;
