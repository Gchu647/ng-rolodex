const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => { // Takes in a user id
  console.log(req.query.user);
  res.json(req.query);
 });

module.exports = router;