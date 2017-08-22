var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/library';
var ObjectId = require('mongodb').ObjectId

var addBook = function(req,res) {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      res.send(err)
    } else {
      db.collection('books').insertOne({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: Number(req.body.stock)
      }, (err, result) => {
        if(err) {
          res.status(500).send(err)
        } else {
          console.log(req.body.stock);
          res.send(result)
        }
      })
    }
  })
}

var editByIdBook = function(req,res) {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      res.send(err)
    } else {
      db.collection('books').updateOne({
        _id: ObjectId(req.params.id)
      }, {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }, (err, result) => {
        if(err) {
          res.send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
}

var deleteByIdBook = function(req,res) {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      res.send(err)
    } else {
      db.collection('books').deleteOne(
        { _id: ObjectId(req.params.id)},
        (err, result) => {
          if(err) {
            res.send(err)
          } else { res.send(result) }
        }
      )
    }
  })
}

var findAllBook = function(req,res) {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      res.send(err)
    } else {
      db.collection('books').find().toArray( function (err, result){
        if(err) {
          res.send(err)
        } else {res.send(result)}
      })
    }
  })
}

var findByIdBook = function (req,res) {
  MongoClient.connect(url, (err,db) => {
    if(err) {
      res.send(err)
    } else {
      db.collection('books').findOne({
        _id: ObjectId(req.params.id)
      }, (err, result) => {
        if(err) {
          res.send(err)
        } else {res.send(result)}
      })
    }
  })
}

module.exports = {
  addBook,
  editByIdBook,
  deleteByIdBook,
  findAllBook,
  findByIdBook
}
