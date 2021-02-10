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
import Sidebar from './components/Sidebar';

class App extends Component {
  state = {
    isOpen: false,
  }
  toggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <Router>
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle}/>
        <Navbar toggle={this.toggle}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/createVote/:poll_id" exact component={createVote} />
          <Route path="/findVote" exact component={findVote} />
          <Route path = "/voter/:poll_id" exact component={voter} />
          <Route path="/analytics/:poll_id" exact component={analytics} />
        </Switch>
      </Router>
    );
  }

}


export default App;
