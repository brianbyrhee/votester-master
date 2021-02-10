import React, {useState} from 'react';
import Form from './Form';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import {Text} from 'react-native';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'gray',
  },
}));

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, addTodo }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return (
        <Grid container justify = 'center'>
          <Grid item xs = {6} zeroMinWidth>
            <Paper className={classes.paper}>
              <Form edit={edit} onSubmit={submitUpdate} />
            </Paper>
          </Grid>
        </Grid>
    );
  }

  return (
    <div className={classes.root} class = "voteGrid">
      <Grid 
      id = "cards"
      container spacing={4} 
      justify = "space-evenly"
      alignItems = "stretch"
      >
        {
        todos.slice(0).reverse().map((todo, index) => (
          <Grid item xs>
            <Paper className={classes.paper}>
              <div
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}
              >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                  {todo.text}
                </div>
                <div className='icons'>
                  <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                  />
                  <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                  />
                </div>
              </div>
            </Paper>
          </Grid>
        ))
        }
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Form onSubmit={addTodo} />
          </Paper>
        </Grid>
      </Grid>
      <Text>{"\n"}{"\n"}</Text>
      
    </div>
  )
};

export default Todo;
