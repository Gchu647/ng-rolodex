const express = require('express');
const router = express.Router();
const systems = require('./systems');
const clients = require('./clients');

// routes
router.use('/', systems);
router.use('/clients', clients);

module.exports = router;