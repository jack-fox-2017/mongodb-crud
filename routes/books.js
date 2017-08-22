const express = require('express')
const router = express.Router()
const controller = require('../controllers/bookController')

router.post('/', controller.addBook)

module.exports = router
