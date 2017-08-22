const MongoClient = require('mongodb').MongoClient

const find = (req, res)=>{
  MongoClient.connect("mongodb://localhost:27017/library", (err, db)=>{
    if(err)throw err
    db.collection('Book').find().toArray((err, result)=>{
      if(err)throw  err
      // console.log(result);
      res.send(result)
    })
  })
}



module.exports = {
  find
}
