const router = require('express').Router();
const Option = require('../models/options.model');
const Vote = require('../models/voters.model');

router.route('/').get((req, res) => {
  Option.find()
    .then(options => res.json(options))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const option_name = req.body.option;
  const newOption = new Option({name: option_name});
  const addOption = new Vote({option: option_name, counter: 0, votes: [{name: "", date: Date.now()}]});

  addOption.save()
  newOption.save()
    .then(() => res.json('Option Initialized!'))
    .catch(err => res.status(400).json('Error: ' + err));

})

module.exports = router;