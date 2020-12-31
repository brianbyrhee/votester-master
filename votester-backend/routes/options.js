const router = require('express').Router();
const Option = require('../models/options.model');
const mongoose = require('mongoose');

router.route('/').get((req, res) => {
  Option.find()
    .then(options => res.json(options))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const id = mongoose.Types.ObjectId(req.body.id)
  const newOption = new Option({id, name});

  newOption.save()
    .then(() => res.json('Option added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;