const router = require('express').Router();
const Database = require('../models/database.model');

//pollid
const id = "asnxajsnei219"; 

router.route('/').get((req, res) => {
  Database.find({'pollid': id}, {options: 1})
    .then(options => res.json(options))
    .catch(err => res.status(400).json('Error: ' + err));
});


//figure out adding unique IDs
router.route('/add').post((req, res) => {
  const option = req.body.option;
  const newOption = {name: option, counter: 0}

  Database.findOneAndUpdate(
    {'pollid': id},
    {$push: {options: newOption}}
  )
  .then(() => res.json('Option added!'))
  .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;