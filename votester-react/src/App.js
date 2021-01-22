import './App.css';
import './option.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import createVote from './pages/createVote';
import findVote from './pages/findVote';
import analytics from './pages/analytics';
import voter from './pages/Voter';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/createVote/:poll_id" exact component={createVote} />
          <Route path="/findVote" exact component={findVote} />
          <Route path = "/voter/:poll_id/:user_id" exact component={voter} />
          <Route path="/analytics/:poll_id" exact component={analytics} />
        </Switch>
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

}


export default App;
