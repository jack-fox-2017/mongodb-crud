const booksModel = require('../models/books')
const ObjectId = require('mongodb').ObjectId
const Book = new booksModel()

const findAll = (req,res) => {
  Book.findAll((docs)=> {
    res.send(docs)
  })
}

const create = (req,res) =>{
  var add = {
    isbn: `${req.body.isbn}`,
    title: `${req.body.title}`,
    author: `${req.body.author}`,
    category: `${req.body.category}`,
    stock: `${req.body.stock}`
  }

  Book.create(add,(error,result)=>{
    res.send({
      err:error,
      success: result
    })
  })
}

const update = (req,res) => {
  let id = { _id: ObjectId(req.params.id) }
  var update = {
    isbn: `${req.body.isbn}`,
    title: `${req.body.title}`,
    author: `${req.body.author}`,
    category: `${req.body.category}`,
    stock: `${req.body.stock}`
  }

  Book.update(id,update, (error,result)=>{
    res.send({
      err:error,
      success: result
    })
  })
}

const destroy = (req,res) => {
  let id = { _id: ObjectId(req.params.id)}

  Book.destroy(id,(error,result)=>{
    res.send({
      err: error,
      success: result
    })
  })
}

const test = (req,res) => {
  Book.test((err)=>{
    console.log(err);
  })
}

module.exports = {
  findAll,
  test,
  create,
  update,
  destroy
}
