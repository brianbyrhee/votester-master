import React, {useState} from 'react';
import Form from './Form';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
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
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    todos.map((todo, index) => (
    <Grid item xs={1} sm>
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
  )
};

export default Todo;
