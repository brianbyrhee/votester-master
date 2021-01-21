import React from 'react';
import {Bar} from 'react-chartjs-2';
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Poll Data',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [6, 5, 8, 8, 5, 5, 4]
    }
  ]
};
function Chart() {
  return (
    <div>
        <h2>Results of your Poll live! </h2>
        <b> Refresh for new results. Last refreshed at </b>
        <Bar
          data={data}
          width={400}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
    </div>
  );
}
export default Chart;