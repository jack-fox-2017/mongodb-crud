var express = require('express');
var router = express.Router();

var booksController = require('../controllers/books')

router.get('/test-connection', booksController.test);
router.get('/', booksController.findAll);
router.post('/', booksController.create);
router.put('/:id', booksController.update);
router.delete('/:id', booksController.destroy);


module.exports = router;
