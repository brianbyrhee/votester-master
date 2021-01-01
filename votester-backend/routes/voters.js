const router = require('express').Router();
const Vote = require('../models/voters.model');
const mongoose = require('mongoose');
const Options = require('../models/options.model');

router.route('/').get((req, res) => {
  Vote.find()
    .then(voters => res.json(voters))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.name;
  const option = req.body.option;
  const newVote = {name: username, date: Date.now()}

  Vote.findOneAndUpdate(
    {'option': option},
    {$push: {"votes": newVote}},
    {$inc: {"counter": 1}},
    {new: true},
    (err) => {
      if (err) res.status(400).json('Error: ' + err);
      return res.json('Vote added!')
    }
  )
})

module.exports = router;
