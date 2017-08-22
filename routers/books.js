const express = require('express')
const router = express.Router()

const {getAllData, insertData} = require('../controller/books')

router.get('/', getAllData)
router.post('/', insertData)

module.exports = router
