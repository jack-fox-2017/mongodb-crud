var MongoClient = require('mongodb').MongoClient


// Connection URL
var url = 'mongodb://localhost:27017/library';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  if(!err) {
    db.collection('book').insertOne({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
    db.close();
  } else {
    console.log(err);
  }
});

module.exports = {

}
