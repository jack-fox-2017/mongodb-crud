var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var ObjectID = require('mongodb').ObjectID

// Connection URL
var url = 'mongodb://localhost:27017/library';
// Use connect method to connect to the Server
var insertbook = (req,res) => {
  MongoClient.connect(url, (err, db) => {
    if(err){
      console.log(err);
    }else {
      db.collection('books').save({
        isbn : req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }, (err,result) => {
        if(err){
          res.send(err);
        } else {
          res.send(result);
        }
      })
    }
  })
}

var getallbook = (req,res) => {
  MongoClient.connect(url,(err,db) => {
    if(err){
      console.log(err);
    } else {
      db.collection('books').find().toArray((err,result) => {
        if(err){
          console.log(err);
        } else {
          res.send(result)
        }
      })
    }
  })
}

var getonebook = (req,res) => {
  MongoClient.connect(url,(err,db) => {
    var objId = ObjectID(req.params.id)
    if(err){
      console.log(err);
    } else {
      db.collection('books').find({_id:objId}).toArray((err,result) => {
        if(err){
          console.log(err);
        } else {
          res.send(result);
        }
      })
    }
  })
}

var deletebook = (req,res) => {
  MongoClient.connect(url,(err,db) => {
    var objId = ObjectID(req.params.id)
    if(err){
      res.send(err);
    } else {
      db.collection('books').deleteOne({
        _id : objId
      }, (err,result) => {
        if(err){
          res.send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
}

var updatebook = (req,res) => {
  var objId = ObjectID(req.params.id)
  MongoClient.connect(url,(err,db) => {
    if(err){
      res.send(err)
    } else {
      db.collection('books').update({_id: objId},{
        isbn : req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      },(err,result) => {
        if(err){
          res.send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
}



module.exports = {insertbook,getallbook,getonebook,deletebook,updatebook};
