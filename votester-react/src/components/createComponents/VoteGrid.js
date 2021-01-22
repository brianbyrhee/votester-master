import React, {useState} from 'react';
import Form from './Form';
import Todo from './Todo';
import axios from 'axios';
import Button from "@material-ui/core/Button";

function VoteGrid(props) {
  const poll_id = props.poll_id
  const [todos, setTodos] = useState([]);

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
    //with todos and poll_id, send request to add to DB
    console.log(...todos)

    console.log(poll_id)
    const user = "brian"
    axios.post('http://localhost:5000/options/add', user)
    .then(res => console.log(res.data));
  }

  return (
    <>
      {/* <h4>Type what you want to vote for!</h4> */}
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
      <Button variant = "outlined" onClick = {onSubmit}>Set Options</Button>
    </>
  );
}

export default VoteGrid;
