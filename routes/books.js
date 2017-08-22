var express = require('express');
var router = express.Router();
const bookController = require('../controllers/books');

/* GET users listing. */
router.get('/', bookController.getBooks);
router.get('/:isbn', bookController.getBook);
router.post('/', bookController.createBook);
router.put('/:isbn', bookController.updateBook);
router.delete('/:isbn', bookController.removeBook);

module.exports = router;
