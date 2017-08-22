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
 
 
  
 
 
 
 module.exports = {
   findAllBooks
  }
