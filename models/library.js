class Library {
  constructor() {
    this.url = "mongodb://localhost:27017/library"
  }
  find(mongo, cb){
    mongo.connect(this.url, (err, db)=>{
      if(err){
        throw err
      }
    db.collection('Book').find().toArray((err, result)=>{
        if(err){
          cb(true,null)
        }else{
          cb(false,result)
        }
        return result
      })
    })
  }
  create(data, mongo, cb){
    mongo.connect(this.url, (err, db)=>{
      if(err){
        throw err
      }
    db.collection('Book').insert({
      isbn : data.isbn,
      title : data.title,
      author : data.author,
      category : data.category,
      stock : data.stock
    },(err, result)=>{
        if(err){
          cb(true,null)
        }else{
          cb(false,result)
        }
        return result
      })
    })
  }
  edit(object,data,id,mongo,cb){
    mongo.connect(this.url, (err, db)=>{
      if(err){
        throw err
      }
    db.collection('Book').updateOne({_id : object(id)},{
      isbn : data.isbn,
      title : data.title,
      author : data.author,
      category : data.category,
      stock : data.stock
    },(err, result)=>{
        if(err){
          cb(true,null)
        }else{
          cb(false,result)
        }
        return result
      })
    })
  }

  remove(mongo,object,id,cb){
    mongo.connect(this.url, (err, db)=>{
      if(err){
        throw err
      }
    db.collection('Book').remove({_id:object(id)},(err, result)=>{
        if(err){
          cb(true,null)
        }else{
          cb(false,result)
        }
        return result
      })
    })
  }

  // findTitle(title, mongo, cb){
  //   mongo.connect(this.url, (err, db)=>{
  //     if(err){
  //       throw err
  //     }
  //   db.collection('Book').find({title:title}).toArray((err, result)=>{
  //       if(err){
  //         cb(true,null)
  //       }else{
  //         cb(false,result)
  //       }
  //       return result
  //     })
  //   })
  // }
}

module.exports = Library
