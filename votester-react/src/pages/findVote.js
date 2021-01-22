import React from 'react';
import FindForm from '../components/findComponents/FindForm';
import {Text} from 'react-native';

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
    <Text>
    <h2>Find Vote</h2>
    To find a vote, type in the vote ID, or use the vote ID provided by the host! 
    Providing {"\n"}a password will direct you to the host page, where you can observe the 
    poll results. No {"\n"}password will redirect you to the voting page. 
    <FindForm />
    </Text>
    </div>
  )
}

export default findVote;
