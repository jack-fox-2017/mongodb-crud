class Book {
  constructor() {}

  static findAll(mongo, url, cb) {
    mongo.connect(url, (err, db) => {
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

  static createData(mongo, url, dataForm, cb) {
    mongo.connect(url, (err, db) => {
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
        }, (err, result) => {
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

  static removeData(mongo, url, object, id, cb) {
    mongo.connect(url, (err, db) => {
      if (err) {
        throw err
      }
      else {
        db.collection('books').remove({
          _id: object(id)
        }, (err, result) => {
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

  static updateData(mongo, url, object, id, dataForm, cb) {
    mongo.connect(url, (err, db) => {
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
        }, (err, result) => {
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

}


module.exports = Book
