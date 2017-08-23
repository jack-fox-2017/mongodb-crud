const express = require('express');
const router = express.Router();
const controller = require ('../controllers/booksController')


router.get('/', controller.findDocuments)
router.post('/', controller.insertDocuments)
router.put('/:id', controller.updateDocument)
router.delete('/:id', controller.deleteDocument)

module.exports = router;
