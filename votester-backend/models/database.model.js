const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const optionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  counter: {
    type: Number,
    required: true
  }
  }
);

const voterSchema = new Schema({user: {
  type: String, 
  required: false,
  unique: true
}, 
vote: {
  type: String,
  required: true
}
}, {_id: false});
const dataSchema = new Schema({
  //user/creator, userid, password, options, vote array per option (array of struct: name, time, email) 
  pollname: {
    type: String,
    required: true
  },
  pollid: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  options: [optionSchema],
  voters: [voterSchema]
  }, {
  timestamps: true
})

const Database = mongoose.model('Database', dataSchema);

module.exports = Database;