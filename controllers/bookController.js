'use strict'

const MongoClient = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const url = 'mongodb://localhost:27017/library'

module.exports = {
  insertBook: function (req,res) {
    MongoClient.connect(url, function(err, db){
      const col = db.collection('books');
      col.insertOne({
          isbn : req.body.isbn,
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
          stock: req.body.stock
        }, function(err, result) {
          res.send(result);
        });
    })
  },
  findAllBook: function (req,res) {
    MongoClient.connect(url, function(err, db){
      const col = db.collection('books');
      col.find({}).toArray(function(err, docs) {
        res.send(docs);
      });
    })
  },
  findBook: function (req,res) {
    MongoClient.connect(url, function(err, db){
      const col = db.collection('books');
      col.find({_id: ObjectId(`${req.params.id}`)}).toArray(function(err, docs) {
        res.send(docs);
      });
    })
  },
  updateBook: function (req,res) {
    MongoClient.connect(url, function(err, db){
      const col = db.collection('books');
      col.updateOne({_id: ObjectId(`${req.params.id}`)},
        { $set:
          {
          isbn : req.body.isbn,
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
          stock: req.body.stock
          }
        },
        function(err, result) {
        res.send(result);
        }
      );
    })
  },
  deleteBook: function (req,res) {
    MongoClient.connect(url, function(err, db){
      const col = db.collection('books');
      col.deleteOne({_id: ObjectId(`${req.params.id}`)},function(err, result) {
        res.send(result);
      });
    })
  }
}
