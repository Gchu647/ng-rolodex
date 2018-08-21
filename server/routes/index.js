const express = require('express');
const router = express.Router();
const systems = require('./systems');
const contacts = require('./contacts');

// routes
router.use('/', systems);
router.use('/contacts', contacts);

module.exports = router;