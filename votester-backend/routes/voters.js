const router = require('express').Router();
const mongoose = require('mongoose');
const Options = require('../models/options.model');
const Database = require('../models/database.model');

//pollid
const id = "asdj2n1";

//get, add, update, delete(?)
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

router.route('/:id').get((req, res) => {
  Database.find({'pollid': id}, {voters: 1})
    .then(voters => res.json(voters))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Database.find({'pollid': id}, {voters: 1})
    .then(voters => {
      voters.user = req.body.name;
      voters.vote = req.body.vote;
      
      voters.save()
        .then(() => res.json('Voter mutated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
