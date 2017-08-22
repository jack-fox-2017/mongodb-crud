const model = require('../models/mongo_db')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost/library";


class books {
  constructor() {
    this.collection = 'books'
  }

  test(cb) {
    MongoClient.connect(url,(err, db)=>{
      var collection = db.collection(this.collection);
      console.log(collection);
      console.log("Connected correctly to server");
      db.close();
      cb(err)
    });
  }

  findAll(cb) {
    model(this.collection)
    .then((collection)=>{
      collection.find({}).toArray(function(err, docs) {
        cb(docs);
      });
    })
  }

  create(addObj,cb) {
    model(this.collection)
    .then((collection)=>{
      collection.insert(addObj,(err,result)=>{
        cb(err,result)
      })
    })
  }

  update(id,updateObj,cb) {
    model(this.collection)
    .then((collection)=>{
      collection.updateOne(id,{ $set: updateObj}, (err,result)=>{
        cb(err,result)
      })
    })
  }


  destroy(id,cb) {
    model(this.collection)
    .then((collection)=>{
      collection.deleteOne(id, (err,result)=>{
        cb(err,result)
      })
    })
  }

}

module.exports = books
