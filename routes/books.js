'use strict'
const express = require('express');
const router = express.Router();
const books = require('../controllers/bookscontroller');

/* GET users listing. */
router.get('/', books.findBook);

router.post('/', books.addBook)

router.delete('/:id', books.editBook)

router.patch('/:id', books.editBook)

router.get('/:id', books.findBookById)



module.exports = router;
