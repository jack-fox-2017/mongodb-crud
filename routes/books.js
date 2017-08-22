const express = require('express');
const controller = require('../controllers/book')

var router = express.Router();


router.get('/books', controller.findAllBooks);


module.exports = router;
