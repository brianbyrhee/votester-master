import React from 'react'
import VoteGrid from '../components/voter/VoteGrid'
import {Text} from 'react-native';

const Voter = () => {

  return (
    <div>
      <Text>
        <h2>Submit your vote here!</h2>
        <VoteGrid />
      </Text>
    </div>
  )
}

export default Voter;
