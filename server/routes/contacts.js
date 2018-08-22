const express = require('express');
const router = express.Router();
const User = require('../db/models/User');
const Contact = require('../db/models/Contact');

// Get all contacts for the logged in user
router.get('/', (req, res) => {
  const created_by = req.query.user;

  return Contact
    .where({ created_by })
    .fetchAll()
    .then(userContacts => {
      res.json(userContacts);
    })
    .catch(err => res.json(err.message));
});

// Respond with all contacts that match the search term for this user
router.get('/search/:term' , (req, res) => {
  const term = `%${req.params.term}%`;
  const created_by = req.query.user;

  return Contact
  .query(function(qb) { // Had to use a query to use where and where
    qb.where({created_by})
      .andWhere('name', 'like', term);
  })
  .fetchAll()
  .then(userContacts => {
    res.json(userContacts);
  })
  .catch(err => res.json(err.message));
})

// Find contact by id
router.get('/:id', (req, res) => {
  const id = req.params.id;

  return new Contact()
    .where({id})
    .fetch()
    .then(contact => {
      res.json(contact);
    })
    .catch(err => res.json(err.message));
})

// Posting a new contact
router.post('/', (req, res) => {
  const contactInfo = {
    name: req.body.name, // not null
    address: req.body.address,
    mobile: req.body.mobile,
    work: req.body.work,
    home: req.body.home,
    email: req.body.email,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    github: req.body.github,
    created_by: req.body.created_by//not null
  }

  return new Contact(contactInfo)
    .save()
    .then(contact => {
      res.json(contact);
    })
    .catch(err => res.json(err.message));
})

// Update and respond with updated contact
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const contactInfo = {
    name: req.body.name, // not null
    address: req.body.address,
    mobile: req.body.mobile,
    work: req.body.work,
    home: req.body.home,
    email: req.body.email,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    github: req.body.github,
    created_by: req.body.created_by//not null
  }

  return new Contact()
    .where({id})
    .save(
      contactInfo,
      {'patch': true}
    )
    .then(contact => {
      res.json(contact);
    })
    .catch(err => res.json(err.message));
})

// Delete the contact that matches the given id
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  return new Contact()
    .where({id})
    .destroy()
    .then(() => {
      res.send(`Contact id ${id} deleted`);
    })
    .catch(err => res.json(err.message));
})

module.exports = router;