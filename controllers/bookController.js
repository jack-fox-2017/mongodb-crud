var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/library";

var findAll = (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("books").find({}).toArray((err, result) => {
      res.send(result)
    })
  });
}

var create = (req, res) => {
  var data = {
    isbn: req.body.isbn,
    title: req.body.title,
    author:req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("books").insertOne(data, (err, result) => {
      res.send(result)
    })
  });
}

var findOne = (req, res) => {
  var id = req.params.id
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("books").findOne({_id: ObjectId(id)}, (err, result) => {
      res.send(result)
    })
  });
}

var putOne = (req, res) => {
  var id = req.params.id
  var data = {
    isbn: req.body.isbn,
    title: req.body.title,
    author:req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }
  console.log('data : ', data);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("books").findOneAndUpdate({_id: ObjectId(id)}, { $set: data})
    .then(result => res.send(result) )
  });
}

var findOneAndDelete = (req, res) => {
  var id = req.params.id
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("books").findOneAndDelete({_id: ObjectId(id)})
    .then(()=>res.send(`Berhasil delete data dengan id ${id}`))
  });
}



module.exports = {
  findAll, create, findOne, putOne, findOneAndDelete
}
