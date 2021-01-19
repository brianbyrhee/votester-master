import React from 'react';
import FindForm from '../components/findComponents/FindForm';

const findVote = () => {
  return (
    <div 
      style = {{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '90vh'
      }}
    >
    <h1>Find Vote</h1>
    <p> To find a vote, type in the vote ID, or use the vote ID provided by the host! 
      Providing a password will direct you to the host page, where you can observe the 
      poll results. No password will redirect you to the voting page. 
    </p>
    <FindForm />
    </div>
  )
}

export default findVote;
