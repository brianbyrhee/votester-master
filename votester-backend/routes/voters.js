const router = require('express').Router();
const Vote = require('../models/voters.model');

router.route('/').get((req, res) => {
  Vote.find()
    .then(voters => res.json(voters))
    .catch(err => res.status(400).json('Error: ' + err));
});

var counter = 0
router.route('/add').post((req, res) => {
  const username = req.body.name;
  const category = req.body.option;
  const date = Date.parse(req.body.date || '');
  const newVote = new Vote({username, date})
  
  Vote.update(
    {option: category},
    {$push: {votes: newVote}}
  )

  newVote.save()
  .then(() => res.json('Vote added!'))
  .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
