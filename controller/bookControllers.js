var MongoClient = require('mongodb').MongoClient
var objectId = require('mongodb').ObjectId
var url = 'mongodb://localhost:27017/library';

//read books data// ====> cara callbacknya
// var readBooks = function(req, res){
//   MongoClient.connect(url, function(err, db){
//     db.collection('books').find({}).toArray(function(err, data){
//       res.send(data)
//     })
//   })
// }

//read books data//
var readBooks = function(req, res){
  MongoClient.connect(url, function(err, db){
    db.collection('books').find({}).toArray()
    .then(data=>{
      res.send(data)
    })
  })
}

// create books data//
var createBooks = function(req, res){
  MongoClient.connect(url, function(err, db){
    db.collection('books').insertOne(
      {
        isb: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      })
      .then(()=>{
        res.send("data created")
      })
      .catch(err=>{
        res.send(err)
      })
  })
}

//updating books data//
var updatingBooks = function(req, res){
  MongoClient.connect(url, function(err, db){
    db.collection('books').updateOne({_id: objectId(req.params.id)},{
      isb: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    },function(err, result){
      if(!err)
      {
        res.send(result)
      }else {
        res.send(err)
      }
    })

  })
}

//detele book data//
var deleteBooks = function(req, res){
  MongoClient.connect(url, function(err, db){
    db.collection('books').deleteOne({_id: objectId(req.params.id)},function(err, result){
      if(!err)
      {
        res.send(result)
      }else {
        res.send(err)
      }
    })
  })
}


module.exports = {
  createBooks,
  readBooks,
  updatingBooks,
  deleteBooks
}
