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

var findById = (req, res)=>{
  mongodb.connect(url)
  .then((db)=>{
    db.collection("books").findOne({_id:ObjectId(req.params.id)})
    .then((book)=>{
      res.send(book)
    })
    .catch(err=>{
      res.send(err)
    })
  })
  .catch(err=>{
    res.send(err)
  })
}

var updateData = (req, res)=>{
  mongodb.connect(url)
  .then((db)=>{
    db.collection("books").findOne({_id:ObjectId(req.params.id)})
    .then((book)=>{
      db.collection("books").updateOne({
        _id:ObjectId(req.params.id)
      }, {
        $set: {
        title : req.body.title || book.title,
        author : req.body.author || book.author,
        category: req.body.category || book.category,
        stock : req.body.stock || book.stock}
      },{
        upsert: true
      })
      .then(user => res.send(user))
      .catch(err => res.send(err))
    })
    .catch(err => res.send(err))
  })
  .catch(err=>{
    res.send(err)
  })
}

var deleteData = (req, res)=>{
  mongodb.connect(url)
  .then((db)=>{
    db.collection('books').deleteOne({_id:ObjectId(req.params.id)})
    .then(()=>{
      res.send('Sucess delete data')
    })
    .catch(err=>{
      res.send(err)
    })
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports={
  getAllData, insertData, findById, updateData, deleteData
}
