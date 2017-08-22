var express = require('express')
var router = express.Router();
var controller = require('../controllers/bookController')

router.post('/', controller.addBook)
router.put('/:id',controller.editByIdBook)
router.delete('/:id', controller.deleteByIdBook)
router.get('/', controller.findAllBook)
router.get('/:id', controller.findByIdBook)

module.exports = router
