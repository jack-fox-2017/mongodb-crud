const bookModel = require('../models/book')

const ObjectId = require('mongodb').ObjectId


var getAll = (req, res) => {
  bookModel.findAll((err, data) => {
    res.send(data)
  })
}

var insert = (req, res) => {
  console.log(req.body);
  bookModel.createData(req.body)
  res.send('data inserted')
}

var remove = (req, res) => {
  bookModel.removeData(ObjectId, req.params.id)
  console.log(req.params.id);
  res.send('data deleted')
}

var edit = (req, res) => {
  bookModel.updateData(ObjectId, req.params.id, req.body)
  res.send('data updated')
}


module.exports = {
  getAll,
  insert,
  remove,
  edit
}
