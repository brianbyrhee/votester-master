import React, { useState, useEffect, useRef } from 'react'

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: (Math.random()*1e16).toString(36),
      text: input
    });
    setInput('');
  };

  return (
    <form className= "todo-form" onSubmit = {handleSubmit}>
      {props.edit ? ( 
        <>
          <input 
            type = "text" 
            placeholder = "Update task" 
            value = {input} 
            name="text"
            className = "todo-input edit"
            onChange = {handleChange}
            ref = {inputRef} 
          />
          <button className = "add-vote edit">Update</button>
        </>
        ) : 
        (<>
          <input 
            type = "text" 
            placeholder = "Add a option" 
            value = {input} 
            name="text"
            className = "todo-input"
            onChange = {handleChange}
            ref = {inputRef} 
          />
          <button className = "add-vote"> Add vote</button>
        </>
        )
      }
      
    </form>
  )
}

export default Form
