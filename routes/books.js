const express = require('express');
const controller = require('../controllers/book')

var router = express.Router();


router.get('/books', controller.findAllBooks);
router.get('/books/:id', controller.findOneBooks);
router.post('/books', controller.addBooks);
router.put('/books/:id', controller.editBooks);
router.delete('/books/:id', controller.deleteBooks);

module.exports = router;
