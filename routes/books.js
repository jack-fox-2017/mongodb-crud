var express = require('express');
var router = express.Router();
var bookController = require('../controllers/bookController');
/* GET users listing. */
// router.put('/:id', userController.update);
router.get('/', bookController.findAllBook);
router.get('/:id', bookController.findBook);
router.post('/', bookController.insertBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
