const express = require('express')
const router = express.Router()
const libraryController = require("../controller/libraryController")


router.get("/", libraryController.find)
router.post("/", libraryController.create)
router.put("/:id", libraryController.edit)
router.delete("/:id", libraryController.remove)



module.exports = router
