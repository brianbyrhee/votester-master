const router = require('express').Router();
const Vote = require('../models/voters.model');
const mongoose = require('mongoose');
const Options = require('../models/options.model');

function ascii_to_hexa(str) {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
  return arr1.join('');
}

router.route('/').get((req, res) => {
  Vote.find()
    .then(voters => res.json(voters))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.name;
  const option = req.body.option;
  const date = Date.parse(req.body.date || '');
  const newVote = {username, date}
  //const hex = JSON.stringify(category)
  //console.log(hex)
  //const objectId = mongoose.Types.ObjectId(hex)
  const objectId = 0

  Options.find()
    .then(voters => res.json(voters))
    .catch(err => res.status(400).json('Error: ' + err));

  Options.find({name: option}, function (err, docs) {
      console.log("we are here")
      console.log(docs)
    });

  console.log("stuff happened here");
  Vote.update(
    {'_id': objectId},
    {$push: {"votes": newVote}},
    (err) => {
      if (err) res.status(400).json('Error: ' + err);
      return res.json('Vote added!')
    }
  )
})

module.exports = router;
