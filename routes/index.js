var express = require('express');
var router = express.Router();
// const studentController = require('../controllers/studentController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// res.send(studentController.addStudent)
// router.post('/students', studentController.addStudent)
// router.get('/students', studentController.getAllStudent)


module.exports = router;
