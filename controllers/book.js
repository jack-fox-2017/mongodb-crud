const bookModel = require('../models/book')
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library';
const ObjectId = require('mongodb').ObjectId


var getAll = (req, res) => {
  bookModel.findAll(MongoClient, url, (err, data) => {
    res.send(data)
  })
}

var insert = (req, res) => {
  console.log(req.body);
  bookModel.createData(MongoClient, url, req.body, (err, data) => {
    if (!err) {
      res.send('data inserted')
    }
    else {
      res.send('insert data gagal')
    }
  })
}

var remove = (req, res) => {
  bookModel.removeData(MongoClient, url, ObjectId, req.params.id, (err, data) => {
    if (!err) {
      res.send('data deleted')
    }
    else {
      res.send('delete gagal')
    }
  })
}

var edit = (req, res) => {
  bookModel.updateData(MongoClient, url, ObjectId, req.params.id, req.body, (err, data) => {
    if (!err) {
      res.send('data updated')
    }
    else {
      res.send('update gagal')
    }
  })
}


module.exports = {
  getAll,
  insert,
  remove,
  edit
}
