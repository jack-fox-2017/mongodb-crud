const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))

const bookController = require('../controllers/book')

/* GET users listing. */
router.get('/', bookController.getAll)
router.post('/', bookController.insert)
router.delete('/:id', bookController.remove)
router.put('/:id', bookController.edit)



module.exports = router;
