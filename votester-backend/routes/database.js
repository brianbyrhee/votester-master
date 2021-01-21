const router = require('express').Router();
const Database = require('../models/database.model');

const id = "asdj2n1"

//get, delete, post, update(?)
router.route('/').get((req, res) => {
  Database.find()
    .then(poll => res.json(poll))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.pollname;
  const pollid = req.body.pollid;
  const password = req.body.password;
  var nulloptions = {
    name: pollid, 
    counter: 0
  };
  var nullvoters = {
    user: pollid, 
    vote: "dummy", 
    date: Date.now()
  };
  var newPoll = new Database({pollname: name, pollid: pollid, password: password, options: nulloptions, voters: nullvoters})

  newPoll.save()
    .then(() => res.json('Poll added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

//change find by _id to just find by pollid
router.route('/:id').get((req, res) => {
  Database.find({'pollid': id})
    .then(poll => res.json(poll))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Database.findOneAndDelete(id)
    .then(poll => res.json('Poll deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;