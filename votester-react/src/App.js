import './App.css';
import './option.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";


function Option(props) {
  return <h2> Candidate {props.id}: {props.name}</h2>
}

class App extends Component {
  state = {
    numChildren: 0
  }

  render() {
    const children = []

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<ChildComponent key={i} number={i} />);
    }

    return (
      <Router>
        <Navbar />
      </Router>
      // <div className="App">
      //   <h1> Votester: Simple Voting App </h1>
      //   <button>Add option</button>
      //   <Option name = "Trump" id = "1"/>
      //   <Option name = "Biden" id = "2"/>
      //   <ParentComponent addChild={this.onAddChild}>
      //     {children}
      //   </ParentComponent>
      //   <div class = "form">
      //     <input type = "text" name = "name" autoComplete = "off" required /> 
      //     <label for = "name" class = "label-name">
      //       <span class = "content-name"> Name </span>
      //     </label>
      //   </div>

      //   {/* <script src="https://jsuites.net/v3/jsuites.js"></script>
      //   <link rel="stylesheet" href="https://jsuites.net/v3/jsuites.css" type="text/css" />
        
      //   <input id='calendar' />
        
      //   <script>
      //   jSuites.calendar(document.getElementById('calendar'), {time: true, format:'DD/MM/YYYY HH24:MI'});
      //   </script> */}
      // </div>
      
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }
}

const ParentComponent = props => (
  <div className="option.circle">
    <p>
      <a href="#" onClick={props.addChild}>
        Add Another Option
      </a>
    </p>
    <div id="children-pane">
      {props.children}
    </div>
  </div>
);


const ChildComponent = props => <div>{"I am child " + props.number}</div>;

export default App;
