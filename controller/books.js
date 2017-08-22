var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/library';

mongodb.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

var getAllData = (req, res)=>{
  mongodb.connect(url)
  .then((db)=>{
    db.collection("books").find().toArray()
    .then(books=>{
      console.log("ini books",books);
      res.send(books)
    })
    .catch(err=>{
      res.send(err)
    })
  })
  .catch(err=>{
    res.send(err)
  })
}

var insertData = (req, res)=>{
  mongodb.connect(url)
  .then((db)=>{
    db.collection("books").insert({
      title : req.body.title,
      author : req.body.author,
      category: req.body.category,
      stock : req.body.stock
    })
    .then(()=>{
      res.send("Succes Add New Item Books")
    })
    .catch(err=>{
      res.send(err)
    })
  })
  .catch(err=>{
    res.send(err)
  })
}

// var editData = (req, res)=>{
//
// }

module.exports={
  getAllData, insertData
}
