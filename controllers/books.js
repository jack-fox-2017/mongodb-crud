const bookModel = require('../models/books');

var getBooks = (req, res)=>{
  bookModel.findAll()
  .then(books=>{
    res.json(books)
  })
  .catch(err=>{
    res.send(err)
  })
}

var getBook = (req, res)=>{
  bookModel.findByISBN(req.params.isbn)
  .then(book=>{
    res.json(book)
  })
  .catch(err=>{
    res.send(err)
  })
}

var createBook = (req, res)=>{
  bookModel.create(req.body)
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

var updateBook = (req, res)=>{
  bookModel.update(req.params.isbn, req.body)
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

var removeBook = (req, res)=>{
  bookModel.destroy(req.params.isbn)
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  removeBook
}
