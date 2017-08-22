var mongo = require('mongodb').MongoClient

module.exports = (collection, cb) =>{
  mongo.connect('mongodb://localhost:27017/library', (err, db)=>{
    if(err) throw err;
    else cb(db.collection(collection))
  })
}
