const express = require('express');
const router = express.Router();
const users = require('./users');
const clients = require('./clients');

router.get('/', (req, res) => {
  res.send('index.js works!');
});

router.use('/users', users);
router.use('/clients', clients);

module.exports = router;