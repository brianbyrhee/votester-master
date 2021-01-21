import React, {useState, useRef, useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SelectInput from '@material-ui/core/Select/SelectInput';

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

const VoteGrid = () => {
  const classes = useStyles();

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
  })


  //retrieve the options in some array using axios
  const todos = ["obama", "trump"];

  const [vote, setVote] = useState({
    id: (Math.random()*1e16).toString(36),
    name: '',
    user_vote: ''
  });

  const submitVote = (todo) => {
    setVote((vote) => ({
      ...vote,
      user_vote: todo
    }));
    console.log(vote);
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(vote)
  }

  const handleChange = e => {
    e.persist();
    setVote((vote) => ({
      ...vote,
      name: e.target.value
    }));
  };

  return (
    <div>
    <div className={classes.root} class = "voteGrid">
      <form className = "name-form" onSubmit = {submitForm}>
        <input
          type="text"
          placeholder="Name"
          value = {vote.name}
          name = "text"
          className = "name-input edit"
          onChange = {handleChange}
          ref = {inputRef}
        />
        <button className = "submit name">Submit</button>
      </form>
    <Grid 
    id = "cards"
    container spacing={4} 
    justify = "space-evenly"
    alignItems = "stretch"
    >
    {
      todos.map((todo, index) => (
        <Grid item xs={4} >
          <Paper className={classes.paper}>
            <div
              className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
              key={index}
            >
              <button onClick = {() => submitVote(todo)}> { todo }</button>
            </div>
          </Paper>
        </Grid>
      ))
    }   
    </Grid>
  </div>
  <h2>{vote.name}'s vote is: {vote.user_vote}</h2>
  <button onClick = {console.log("ksdnjkwqnj1: ", vote)}> Submit vote </button>
  </div>
  )
}

export default VoteGrid;
