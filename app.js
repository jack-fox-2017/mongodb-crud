const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    MongoClient = require('mongodb').MongoClient,
    cors = require('cors');
require('dotenv').config()

//connect to database mongodb
let url = 'mongodb://localhost:27017/library2'
MongoClient.connect(url, (err, db) => {
  if(!err)
  console.log('Connect to Database');
})
    
const index = require('./routes/index');
const books = require('./routes/books');

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use('/', index);
app.use('/books', books)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(process.env.PORT || 3000);
