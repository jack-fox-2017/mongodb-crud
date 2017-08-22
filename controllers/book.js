const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library';
const ObjectID = require('mongodb').ObjectID;



let findAllBooks = (req, res) => {
  MongoClient.connect(url, (err, db) => {
     if(!err){
         var collection =  db.collection('books')
         collection.find({}).toArray((err, docs) => {
           if(!err){
             res.send(docs)
           }else{
             res.status(500).send(err)
           }
         })
     }else{
       console.log(err);
     }
   })
 }
 
 let findOneBooks = (req, res) => {
   let objId = new ObjectID(req.params.id)
   MongoClient.connect(url, (err, db) => {
     if(!err){
      var collection = db.collection('books');
      collection.findOne({
        _id: objId
      }, (err, data) => {
        if(!err){
          res.send(data)
        }else{
          res.status(500).send(err)
        }
      })
    }else{
      console.log(err);
    }
   })
 }
 
 let addBooks = (req, res) => {
   MongoClient.connect(url, (err, db) => {
     if(!err){
       var collection = db.collection('books')
       collection.insertOne({
         isbn: req.body.isbn,
         title: req.body.title,
         author: req.body.author,
         stock: req.body.stock,
         category: req.body.category
       }, (err, data) => {
         if (!err){
           res.send(data)
         }else{
           res.status(500).send(err)
         }
       })
     }else{
       console.log(err);
     }
   })
 }
 
 let editBooks = (req, res) => {
   let objId = new ObjectID(req.params.id)
   MongoClient.connect(url, (err, db)=> {
     if(!err){
       var collection = db.collection('books');
       collection.updateOne({
        _id: objId
      }, {$set: {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        stock: req.body.stock,
        category: req.body.category
      }}, (err, data) => {
        if(!err){
          res.send(data)
        }else{
          res.status(500).send(err)
        }
      })
     }else{
       console.log(err);
     }
   })
 }
 
 let deleteBooks = (req, res) => {
   let objId = new ObjectID(req.params.id)
   MongoClient.connect(url, (err, db) => {
    if(!err){
      var collection = db.collection('books');
      collection.deleteOne({
        _id: objId
      },(err, data) => {
        if(!err){
          res.send(data)
        }else{
          res.status(500).send(err)
        }
      })
    }else{
      console.log(err);
    }
   })
 }
  
 
 
 
 module.exports = {
   findAllBooks,
   findOneBooks,
   addBooks,
   editBooks,
   deleteBooks
  }
