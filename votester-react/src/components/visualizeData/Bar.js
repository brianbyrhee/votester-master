import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

class Chart extends Component {
  state = {
    poll_id: this.props.poll_id,
    labels : null,
    data: null,
  }

  data = {
      labels: this.state.labels,
      datasets: [
        {
          label: 'Poll Data',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.state.data,
        }
      ]
    };

  getOptions = () => {
    axios.get('http://localhost:5000/options/' + this.state.poll_id)
      .then(response => {
        const data_arr = (response.data)[0]
      });
  }


  render() {
    return (
      <div>
          <h2>Results of your Poll live! </h2>
          <b> Refresh for new results. Last refreshed at </b>
          <Bar
            data={this.data}
            width={400}
            height={100}
            options={{
              maintainAspectRatio: false
            }}
          />
      </div>
    );
  }
}
export default Chart;