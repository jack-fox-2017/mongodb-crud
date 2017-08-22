var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/library';

// mongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//
//   db.close();
// });


// var insertDocuments = function(db, callback) {
//   var collection = db.collection('books');
//   collection.insert({
//     isbn: req.body.isbn,
//     title: req.body.title,
//     author: req.body.author,
//     category: req.body.category,
//     stock: req.body.stock
//   })
//     console.log("Inserted document");
//     callback(result);
//   });
// }

var getAllBooks = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log(err);
    } else {
      db.collection('books').find().toArray((err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result)
        }
      })
    }
  })
}

var addBook = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log(err);
    } else {
      db.collection('books').save({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }, (err, result) => {
        if (err){
          console.log(err);
        } else {
          res.send(result)
        }
      })
    }
  })
}

module.exports = {
  getAllBooks,
  addBook
};
