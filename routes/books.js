var express = require('express');
var router = express.Router();
var libraryControl = require('../controllers/booksControllers')

/* GET users listing. */
router.get('/', libraryControl.getAllBooks)
router.post('/', libraryControl.addBook)
router.get('/:id', libraryControl.getOneBook)
// router.post('/:id', libraryControl.updateBook)
router.put('/:id', libraryControl.updateBook)
router.delete('/:id', libraryControl.deleteBook)
module.exports = router;
