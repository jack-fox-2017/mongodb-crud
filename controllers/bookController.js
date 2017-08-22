const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library2'
const ObjectId = require('mongodb').ObjectId;


let addBook = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log('Connect to Database to adding book');
    let bookCollection = db.collection('books');
    bookCollection.insertOne({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }, (err, book) => {
      if(err){
        res.status(500).send(err)
      } else {
        res.json({msg: 'Adding book success!'})
      }
    })
  })
}

module.exports = {
  addBook
};
