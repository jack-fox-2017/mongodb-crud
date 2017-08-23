var MongoClient = require('mongodb').MongoClient
var objId = require('mongodb').ObjectId


// Connection URL
var url = 'mongodb://localhost:27017/library';

// Use connect method to connect to the server
// var findDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('books');
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     // assert.equal(err, null);
//     // assert.equal(2, docs.length);
//     console.log("Found the following records");
//     // console.dir(docs);
//     callback(res.send(docs));
//   });
// }

// var insertDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('books');
//   // Insert some documents
//   collection.insertOne(
//     {
//       isbn: req.body.isbn,
//       title: req.body.title,
//       author: req.body.author,
//       category: req.body.category,
//       stock: req.body.stock
//     }
//     callback(result);
//   });
// }

// var insertDocuments = function (req,res) {
//   MongoClient.connect(url, function(err, db) {
//       db.collection('books').insertOne({
//         isbn: req.body.isbn,
//         title: req.body.title,
//         author: req.body.author,
//         category: req.body.category,
//         stock: req.body.stock
//       }, function(err, result) {
//         if(err) {
//           res.send(err)
//         } else {
//           res.send('sukses')
//         }
//       })
//       // db.close();
//   })
// }

var findDocuments = (req,res)=> {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('books');
  // Find some documents
    collection.find({}).toArray(function(err, docs) {
      if(!err) {
        res.send(docs)
      } else {
        res.send(err)
      }
    })
  })
}

var insertDocuments = function (req,res) {
  MongoClient.connect(url, function(err, db) {
      db.collection('books').insertOne({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      })
      .then(data => {
        // console.log(data);
        res.send(data)
      })
      .catch(err => {
        res.send(err)
      })
      // db.close();
  })
}

var updateDocument = (req,res) => {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('books');
  // Find some documents
    collection.updateOne({_id : objId(req.params.id)}, {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
    .then(data => {
      // console.log(data);
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  })
}

var deleteDocument = (req,res) => [
  MongoClient.connect(url, function(err,db) {
    var collection = db.collection('books');
    collection.deleteOne({_id : objId(req.params.id)})
    .then(() => {
      res.send('berhasil dihapus')
    })
    .catch(err => {
      res.send(err)
    })
  })
]

// var updateDocument = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Update document where a is 2, set b equal to 1
//   collection.updateOne({ a : 2 }
//     , { $set: { b : 1 } }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Updated the document with the field a equal to 2");
//     callback(result);
//   });
// }

module.exports = {
  findDocuments,
  insertDocuments,
  updateDocument,
  deleteDocument
}
