var express = require('express');
var router = express.Router();
var controller = require ('../controller/bookController')

router.post('/',controller.insertbook)
router.get('/',controller.readbook)
router.delete('/:id',controller.deletebook)
router.put('/:id',controller.updatebook)
module.exports = router;
