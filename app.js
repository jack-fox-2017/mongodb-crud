const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/library';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


mongodb.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

var books = require('./routers/books')

app.use('/books', books)


app.listen(3000)
