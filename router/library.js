const express = require('express')
const router = express.Router()

const libraryController = require("../controller/libraryController")


router.get('/find', libraryController.find)

module.exports = router
