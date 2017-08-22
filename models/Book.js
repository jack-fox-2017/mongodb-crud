const model = require('../models/db_model')
const ObjectId = require('mongodb').ObjectId

const Book = () => {
  return new Promise((resolve, reject) => {
    model('books')
    .then(db => resolve(db))
    .catch(err => reject(err))
  })
}

module.exports = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      Book()
      .then(db => db.find().toArray())
      .then(result => resolve(result))
      .catch(err => reject(err))
    })
  },

  findOne: (where) => {
    if (where.hasOwnProperty('_id')) where._id = ObjectId(where._id)
    return new Promise((resolve, reject) => {
      Book()
      .then(db => db.findOne(where))
      .then(result => resolve(result))
      .catch(err => reject(err))
    })
  },

  create: (data) => {
    return new Promise((resolve, reject) => {
      Book()
      .then(db => db.insert(data))
      .then(result => resolve(result))
      .catch(err => reject(err))
    })
  },

  update: (where, data) => {
    if (where.hasOwnProperty('_id')) where._id = ObjectId(where._id)
    return new Promise((resolve, reject) => {
      Book()
      .then(db => db.update(where, {$set: data}))
      .then(result => resolve(result))
      .catch(err => reject(err))
    })
  },

  destroy: (where) => {
    if (where.hasOwnProperty('_id')) where._id = ObjectId(where._id)
    return new Promise((resolve, reject) => {
      Book()
      .then(db => db.deleteOne(where))
      .then(result => resolve(result))
      .catch(err => reject(err))
    })
  }
}
