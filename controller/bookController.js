var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/library';
var ObjectId = require('mongodb').ObjectId


var insertbook = function (req, res) {
  MongoClient.connect(url, function(err, db){
    var collection = db.collection('library');
    collection.insertOne({
      isbn : req.body.isbn,
      title : req.body.title,
      author : req.body.author,
      category : req.body.category,
      stock : req.body.stock
    }, function(err, result){
      console.log(err);
      if (!err) {
        res.send("data inserted")
      } else {
        res.send(err)
      }
    })
  })
}

var readbook = function (req,res) {
  MongoClient.connect(url, function(err,db){
    var collection = db.collection('library');
    collection.find({}).toArray(function (err,result){
      if (!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  })
}

var deletebook = function (req,res) {
  MongoClient.connect(url, function(err,db){
    var collection = db.collection('library');
    collection.deleteOne({
      _id : ObjectId(req.params.id)
    }, function(err,result) {
      if (!err) {
        res.send('data deleted')
      } else {
        res.send(err)
      }
    })
  })
}

var updatebook = function (req,res) {
  MongoClient.connect(url, function(err,db){
    var collection = db.collection('library');
    collection.updateOne({
      _id : ObjectId(req.params.id)},
      {  isbn : req.body.isbn,
        title : req.body.title,
        author : req.body.author,
        category : req.body.category,
        stock : req.body.stock
      }, function(err,result){
      if (!err) {
        res.send('data updated')
      } else {
        res.send(err)
      }
    })
  })
}

module.exports = {
  insertbook,
  readbook,
  deletebook,
  updatebook
};
