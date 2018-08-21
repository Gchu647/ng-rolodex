const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

router.get('/profile', (req, res) => { // Fetches the profile of a user
  console.log(req.query.user);
  const id = req.query.user;

  return new User()
    .where({ id })
    .fetch()
    .then(profile => {
      res.json(profile);
    })
    .catch(err => res.json(err.message));
 });

module.exports = router;