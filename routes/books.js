var express = require('express');
var router = express.Router();
var controllers = require('../controller/bookControllers')

router.get('/', controllers.readBooks)
router.post('/', controllers.createBooks)
router.put('/:id', controllers.updatingBooks)
router.delete('/:id', controllers.deleteBooks)

module.exports = router;
