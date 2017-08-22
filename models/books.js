const library = require('./library');

function findAll(){
  return new Promise((resolve, reject)=>{
    library('books', (book)=>{
      book.find().toArray((err, result)=>{
        if(err) reject(err)
        else resolve(result)
      })
    })
  })
}

function findByISBN(isbn){
  return new Promise((resolve, reject)=>{
    library('books', (book)=>{
      book.find({isbn:isbn}).toArray((err, result)=>{
        if(err) reject(err)
        else resolve(result)
      })
    })
  })
}

function create(obj){
  return new Promise((resolve, reject)=>{
    library('books', (book)=>{
      book.insertOne({
        isbn:obj.isbn,
        title:obj.title,
        author:obj.author,
        category:obj.category,
        stock:obj.stock
      }, (err, data)=>{
        if(err) reject(err)
        else resolve(data.result)
      })
    })
  })
}

function update(isbn, obj){
  return new Promise((resolve, reject)=>{
    library('books', (book)=>{
      book.updateOne({
        isbn:isbn
      },{
        $set:{
          isbn:obj.isbn,
          title:obj.title,
          author:obj.author,
          category:obj.category,
          stock:obj.stock
        }
      }, (err, data)=>{
        if(err) reject(err)
        else resolve(data.result)
      })
    })
  })
}

function destroy(isbn){
  return new Promise((resolve, reject)=>{
    library('books', (book)=>{
      book.remove({
        isbn:isbn
      }, (err, data)=>{
        if(err) reject(err)
        else resolve(data.result)
      })
    })
  })
}

module.exports = {
  findAll,
  findByISBN,
  create,
  update,
  destroy
}

// create({
//   isbn:'111-111-222',
//   title:'teja sang kolor ijo II',
//   author: 'bang teja',
//   category: 'mature (101+)',
//   stock:'infinity'
// }).then(book=>{
//   console.log(book)
// }).catch(err=>{
//   console.log(err)
// })

// update('111-111-221',{
//   isbn:'111-111-221',
//   title:'teja sang kolor ijo II',
//   author: 'bang teja',
//   category: 'mature (102+)',
//   stock:'5'
// }).then(book=>{
//   console.log(book)
// }).catch(err=>{
//   console.log(err)
// })

// findByISBN('978-1-60309-057-5').then(book=>{
//   console.log(book)
// })

// destroy('111-111-111').then(book=>{
//   console.log(book)
// })
