const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

// Fetches the profile of a user
router.get('/profile', (req, res) => {
  const id = req.query.user;

  return new User()
    .where({ id })
    .fetch()
    .then(profile => {
      res.json(profile);
    })
    .catch(err => res.json(err.message));
 });

 // Edits a user's information
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

 // Login in a user
 router.post('/login', (req, res) => {
   console.log('Loging in as', req.body);
  const username = req.body.username.trim();

  return new User()
  .where({ username })
  .fetch()
  .then(user => {
    res.json(user);
  })
  .catch(err => res.json(err.message));

  // res.json({
  //   id: 1,
  //   username: req.body.username
  // });
 })

//  router.post('/logout', (req, res) => {
//   res.send('logout works!');
// })

// router.post('/register', (req, res) => {
//   res.send('register works!');
// })

module.exports = router;