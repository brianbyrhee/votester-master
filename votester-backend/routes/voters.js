const router = require('express').Router();
const mongoose = require('mongoose');
const Options = require('../models/options.model');
const Database = require('../models/database.model');

//pollid
const id = "asnxajsnei219";

router.route('/').get((req, res) => {
  Database.find({'pollid': id}, {voters: 1})
    .then(voters => res.json(voters))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const vote = req.body.vote;
  const newVote = {user: name, vote: vote}

  Database.findOneAndUpdate(
    {'pollid': id},
    {$addToSet: {"voters": newVote}}
  )
  .catch(err => res.status(400).json('Error: ' + err));
  
  Database.findOneAndUpdate(
    {'pollid': id, 'options.name': vote},
    {$inc: {'options.$.counter': 1}}
  )
  .then(() => res.json('Vote added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
