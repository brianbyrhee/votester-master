const router = require('express').Router();
const Database = require('../models/database.model');

//pollid
const id = "asdj2n1"; 

//get, add, update(?), delete(?) --> depends on how frontend is set up
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
    {$addToSet: {options: newOption}}
  )
  .then(() => res.json('Option added!'))
  .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) => {
  Database.find({'pollid': id}, {options: 1})
    .then(voters => res.json(voters))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;