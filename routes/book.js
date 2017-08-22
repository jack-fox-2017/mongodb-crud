var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController');

/* GET users listing. */
router.get('/', bookController.findAll);
router.post('/', bookController.create);
router.get('/:id', bookController.findOne);
router.put('/:id', bookController.putOne);
router.delete('/:id', bookController.findOneAndDelete);


module.exports = router;
