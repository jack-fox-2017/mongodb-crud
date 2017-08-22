var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController')

/* GET users listing. */
router.get('/', bookController.findAll)
router.get('/:key/:value', bookController.findOne)
router.post('/', bookController.create)
router.put('/:key/:value', bookController.update)
router.delete('/:key/:value', bookController.destroy)

module.exports = router;
