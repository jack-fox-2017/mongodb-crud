const express = require('express')
const router = express.Router()
const controller = require('../controllers/bookController')

router.post('/', controller.addBook)
router.get('/', controller.getAll)
router.get('/:id', controller.getBookById)
router.put('/:id', controller.updateBook)
router.delete('/:id', controller.deleteBook)

module.exports = router
