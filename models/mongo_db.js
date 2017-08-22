var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost/library";

module.exports = (collectionName) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url)
    .then((db)=>{
      resolve(db.collection(collectionName))
    })
    .catch((err)=>{
      reject(err)
    })
  });
}
