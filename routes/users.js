var express = require('express');
var router = express.Router();
const db = require('../controller/librarycontroller');

/* GET users listing. */
router.post('/', db.insertbook)
router.get('/', db.getallbook)
router.get('/:id',db.getonebook)
router.put('/:id', db.updatebook)
router.delete('/:id',db.deletebook)

module.exports = router;


// var findDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Find some documents
//   collection.find({}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     assert.equal(2, docs.length);
//     console.log("Found the following records");
//     console.dir(docs);
//     callback(docs);
//   });
// }
