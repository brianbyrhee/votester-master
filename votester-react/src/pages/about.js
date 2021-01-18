import React from 'react'

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
      <h1>About</h1>
      <p>
        v 1.0.0
      </p>
      <p>
        Votester was created with the aim to deliver the voting experience to be simple, 
        quick and easy to use. Updates to the website will be done regularly. Enjoy!
      </p>
    </div>
  )
}

export default About;
