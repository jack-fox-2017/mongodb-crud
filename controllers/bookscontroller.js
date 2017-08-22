'use strict'
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/library';
var ObjectID = require('mongodb').ObjectId

exports.findBook = (req, res) => {
  MongoClient.connect(url)
    .then(db => {
      var books = db.collection('books')
      books.find({}).toArray()
        .then(data => {
          db.close()
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
    })
    .catch(err => {
      res.send(err)
    })
}

exports.findBookById = exports.editBook = (req, res) => {
  MongoClient.connect(url)
    .then(db => {
      var books = db.collection('books')
      books.findOne({ _id: ObjectID(req.params.id) })
        .then(data => {
          db.close()
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
    })
    .catch(err => {
      res.send(err)
    })
}

exports.addBook = (req, res) => {
  MongoClient.connect(url)
    .then(db => {
      var books = db.collection('books')
      books.insertOne({
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
          stock: req.body.stock
        })
        .then(data => {
          db.close()
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
    })
    .catch(err => {
      res.send(err)
    })
}


exports.editBook = (req, res) => {
  MongoClient.connect(url)
    .then(db => {
      var books = db.collection('books')
      books.updateOne( {_id: ObjectID(req.params.id) }, { stock: req.body.stock,  title: req.body.title, category: req.body.category, author: req.body.author})
        .then(data => {
          db.close()
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
    })
    .catch(err => {
      res.send(err)
    })
}

exports.deleteBook = exports.editBook = (req, res) => {
  MongoClient.connect(url)
    .then(db => {
      var books = db.collection('books')
      books.deleteOne({ _id: ObjectID(req.params.id) })
        .then(data => {
          db.close()
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
    })
    .catch(err => {
      res.send(err)
    })
}