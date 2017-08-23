const express = require('express')
const router = express.Router()

const {getAllData, insertData, findById, updateData, deleteData} = require('../controller/books')

router.get('/', getAllData)
router.post('/', insertData)
router.get('/:id', findById)
router.put('/:id', updateData)
router.delete('/:id', deleteData)

module.exports = router
