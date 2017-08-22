const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library';


class Book {
  constructor(data) {
    this.id = data._id
    this.isbn = data.isbn
    this.title = data.title
    this.author = data.author
    this.category = data.category
    this.stock = data.stock
  }

  static findAll(cb) {
    MongoClient.connect(url, (err, db) => {
      if (err) {
        throw err
      }
      else {
        db.collection('books').find().toArray((err, result) => {
          if (err) {
            cb(true, null)
          }
          else {
            cb(false, result)
          }
        })
      }
    })
  }

  static createData(dataForm) {
    MongoClient.connect(url, (err, db) => {
      if (err) {
        throw err
      }
      else {
        db.collection('books').insertOne({
          isbn: dataForm.isbn,
          title: dataForm.title,
          author: dataForm.author,
          category: dataForm.category,
          stock: dataForm.stock
        })
      }
    })
  }

  static removeData(object, id) {
    MongoClient.connect(url, (err, db) => {
      if (err) {
        throw err
      }
      else {
        db.collection('books').remove({
          _id: object(id)
        })
      }
    })
  }

  static updateData(object, id, dataForm) {
    MongoClient.connect(url, (err, db) => {
      if (err) {
        throw err
      }
      else {
        db.collection('books').updateOne({
          _id: object(id)
        }, {
          isbn: dataForm.isbn,
          title: dataForm.title,
          author: dataForm.author,
          category: dataForm.category,
          stock: dataForm.stock
        })
      }
    })
  }

}


module.exports = Book
