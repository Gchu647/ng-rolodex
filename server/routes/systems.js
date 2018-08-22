const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

router.get('/profile', (req, res) => { // Fetches the profile of a user
  const id = req.query.user;

  return new User()
    .where({ id })
    .fetch()
    .then(profile => {
      res.json(profile);
    })
    .catch(err => res.json(err.message));
 });

 router.put('/users' , (req, res) => { //take out the id later
  const id = req.query.user;
  const username = req.body.username ? req.body.username.trim() : null;
  const name = req.body.name.trim();
  const email = req.body.email.trim();
  const address = req.body.address.trim();

  const editInfo = {
    username, 
    name,
    email,
    address,
  }

  return new User()
    .where({ id })
    .save(editInfo, {'patch': true})
    .then(profile => {
      res.json(profile);
    })
    .catch(err => res.json(err.message));
 })

//  router.post('/login', (req, res) => {
//    res.send('login works!');
//  })

//  router.post('/logout', (req, res) => {
//   res.send('logout works!');
// })

// router.post('/register', (req, res) => {
//   res.send('register works!');
// })

module.exports = router;