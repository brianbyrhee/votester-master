const router = require('express').Router();
const Database = require('../models/database.model');

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
    name: id, 
    counter: 0
  };
  var nullvoters = {
    user: id, 
    vote: "dummy", 
    date: Date.now()
  };
  var newPoll = new Database({pollname: name, pollid: pollid, password: password, options: nulloptions, voters: nullvoters})

  newPoll.save()
    .then(() => res.json('Poll added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:pollid').get((req, res) => {
  Database.findById(req.params.pollid)
    .then(poll => res.json(poll))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Database.findByIdAndDelete(req.params.pollid)
    .then(poll => res.json('Poll deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Database.findById(req.params.id)
    .then(poll => res.json(poll))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;