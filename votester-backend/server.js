const express = require('express');
const request = require('request');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully...")
});

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

const usersRouter = require('./routes/users.js');
const votersRouter = require('./routes/voters.js');

app.use('/users', usersRouter);
app.use('/voters', votersRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})