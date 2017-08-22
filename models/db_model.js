const MongoClient = require('mongodb').MongoClient

module.exports = (collection) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost/library')
    .then(db => resolve(db.collection(collection)))
    .catch(err => reject(err))
  })
}
