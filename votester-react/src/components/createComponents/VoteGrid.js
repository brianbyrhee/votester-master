import React, {useState} from 'react';
import Form from './Form';
import Todo from './Todo';
import axios from 'axios';
import Button from "@material-ui/core/Button";

function VoteGrid() {
  const [todos, setTodos] = useState([]);
  var created = false;
  var pollid = null;

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

const onSubmit = e => {
    console.log(...todos)
    created = true;
    if (created) {
      pollid = (Math.random()*1e16).toString(36);
    }
    console.log(pollid, created)
    const user = "brian"
    axios.post('http://localhost:5000/options/add', user)
    .then(res => console.log(res.data));
  }

  return (
    <>
      <h2>Type what you want to vote for!</h2>
      {/* pollname, poll password */}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        addTodo={addTodo}
      />
      {"\n"}
      {/* <Form onSubmit={addTodo} /> */}
      <Button variant = "outlined" onClick = {onSubmit}>Create Poll</Button>
      {created ? <h4>Poll has been created. The poll ID is {pollid}</h4> : ""}
    </>
  );
}

export default VoteGrid;
