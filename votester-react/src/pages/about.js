import React from 'react';
import {Text, StyleSheet} from 'react-native';
const emoji = require("emoji-dictionary");

const About = () => {
  return (
    <div 
      style = {{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '90vh'
      }}
    >
      {/* {console.log(emoji.getName("🥳"))} */}
      <Text>
          <h3><b>About</b></h3>
            v 1.0.0 {emoji.getUnicode("railway_car")}
            {"\n"}
            Votester was created with the aim to deliver the best voting experience to be {"\n"}simple, 
            quick and easy to use. Updates to the website will be done regularly. {"\n"}Enjoy! {emoji.getUnicode("partying")}
      </Text>
    </div>
  )
}

export default About;
