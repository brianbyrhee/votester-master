import React, { useEffect } from 'react'
import Bar from '../components/visualizeData/Bar';

//redirect to analytics over here
const analytics = () => {
  return (
    <div 
      style = {{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '90vh'
      }}
    >
      <Bar />
    </div>
  )
}

export default analytics;
