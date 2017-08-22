const Book = require('../models/Book')

module.exports = {
  findAll: (req, res) => {
    Book.findAll()
    .then(docs => res.send(docs))
    .catch(err => res.send(err))
  },

  findOne: (req, res) => {
    Book.findOne({[req.params.key]: req.params.value})
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },

  create: (req, res) => {
    Book.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },

  update: (req, res) => {
    Book.update({[req.params.key]: req.params.value}, req.body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
  },

  destroy: (req, res) => {
    Book.destroy({[req.params.key]: req.params.value})
    .then(result => res.send(result))
    .catch(err => res.send(err))
  }
}
