const router = require('express').Router();
const Database = require('../models/database.model');

const id = "2b5c1ya9wyy"

//get, delete, post, update(?)
router.route('/').get((req, res) => {
  Database.find()
    .then(poll => res.json(poll))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  console.log(req.body)
  const name = req.body.poll_name;
  const pollid = req.body.poll_id;
  const password = req.body.password;
  console.log(name, pollid, password)
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
  Database.find({'pollid': req.params.id})
    .then(poll => res.json(poll))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  console.log("hiii")
  Database.findOneAndDelete(req.params.id)
    .then(poll => res.json('Poll deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Database.find({'pollid': req.params.id})
    .then(poll => {
      poll.pollname = poll.pollname
      poll.pollid = req.body.pollid
      poll.password = req.body.pollid

      poll.save()
        .then(() => res.json('Poll updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;