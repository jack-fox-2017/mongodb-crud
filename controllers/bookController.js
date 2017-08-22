const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library2'
const ObjectId = require('mongodb').ObjectId;


let addBook = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log('Connect to DB to adding book');
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

let getAll = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log('Connect to DB to see all books');
    let bookCollection = db.collection('books');
    bookCollection.find({}).toArray((err, books) => {
      if(err){
        res.status(500).send(err)
      } else {
        res.json({books: books})
      }
    })
  })
}

let getBookById = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log('Connect to DB to see detail book by id');
    let bookCollection = db.collection('books');
    let id = req.params.id
    bookCollection.find({_id: ObjectId(id)}).toArray((err, book) => {
      if(err){
        res.status(500).send(err)
      } else {
        res.json({book: book})
      }
    })
  })
}

let updateBook = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log('Connect to DB to update book');
    let bookCollection = db.collection('books')
    let id = req.params.id
    bookCollection.updateOne({_id: ObjectId(id)},
    {$set: 
      {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }
    }, (err, result) => {
      if(err){
        res.status(500).send(err)
      } else {
        res.send(result)
      }
    })
  })
}


let deleteBook = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log('Connect to DB and delete book');
    let bookCollection = db.collection('books')
    let id = req.params.id
    bookCollection.deleteOne({_id: ObjectId(id)}, (err, result) => {
      if(err){
        res.status(500).send(err)
      } else {
        res.send(result)
      }
    })
  })
}

module.exports = {
  addBook,
  getAll,
  getBookById,
  updateBook,
  deleteBook
};
