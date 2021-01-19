import React, { Component, useState } from "react";
// import "./styles.css";
// import CustomInput from "./components/CustomInput";
// import Button from "./components/Button";

function FindForm(props) {
  const [input, setInput] = useState('');
  var state = {
    pollid: "",
    password: ""
  };

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log()
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  }

  return (
    <div>
      <form className= "find-vote" onSubmit = {handleSubmit}>
        <input
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          handleChange={handleChange}
          type="text"
        />
        <input
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true
          }}
          handleChange={handleChange}
          type="password"
        />

        <button type="button" color="primary" className="find-vote-button">
          Find Poll
        </button>
      </form>
    </div>
  )
}

export default FindForm;
