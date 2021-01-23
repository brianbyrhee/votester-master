import React, { useEffect, Component } from 'react'
import Bar from '../components/visualizeData/Bar';
import axios from 'axios'


//better to do data retrieval here, as we can pass it for other graphs in future
//redirect to analytics over here
class analytics extends Component {
  state = {
    poll_id: null
  }

  componentDidMount() {
    let id = this.props.match.params.poll_id
    console.log(id)
    this.setState({
      poll_id: id
    })
    console.log(this.state.poll_id)
  }

  render() {
    return (
      <div 
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '90vh'
        }}
      > 
        <Bar 
          poll_id = {this.state.poll_id}
        />
      </div>
    )
  }
}

export default analytics;
