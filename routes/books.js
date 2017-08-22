var express = require('express');
var router = express.Router();
var libraryControl = require('../controllers/booksControllers')

/* GET users listing. */
router.get('/', libraryControl.getAllBooks)
router.post('/', libraryControl.addBook)

module.exports = router;
