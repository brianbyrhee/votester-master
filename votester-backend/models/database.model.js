const mongoose = require('mongoose');

const Schema = mongoose.Schema;
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
  options: [{
    name: {
      type: String,
      required: true,
      unique: true
    },
    counter: {
      type: Number,
      required: true
    }
  }],
  voters: [{
    user: {
      type: String, 
      required: false,
      unique: true
    }, 
    vote: {
      type: String,
      required: true
    },
    date: {
      type: Date, 
      required: false,
      default: Date.now
    }
  }]
  }, {
  timestamps: true
})

const Database = mongoose.model('Database', dataSchema);

module.exports = Database;