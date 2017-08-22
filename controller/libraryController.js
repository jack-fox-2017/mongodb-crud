const MongoClient = require('mongodb').MongoClient
const ObjectId = require("mongodb").ObjectId
const Library = require("../models/library")
const Model = new Library()

const find = (req, res)=>{
  Model.find(MongoClient, (err, db)=>{
    res.send(db)
  })
}

const create = (req, res)=>{
  Model.create(req.body, MongoClient, (err, db)=>{
    res.send(db)
  })
}

const edit = (req, res)=>{
  let id = req.params.id
  Model.edit(ObjectId,req.body, id, MongoClient, (err, db)=>{
    res.send(db)
  })
}
const remove = (req, res)=>{
  let id = req.params.id
  Model.remove(MongoClient, ObjectId, id, (err, db)=>{
    res.send(db)
  })
}

// const findOne = (req, res)=>{
//   let title = req.params.title
//   Model.findOne(title, MongoClient, (err, db)=>{
//     res.send(db)
//   })
// }


module.exports = {
  find,
  create,
  edit,
  remove
}
