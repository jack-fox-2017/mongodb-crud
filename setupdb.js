var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/library";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("books", function(err, res) {
    if (err) throw err;
    console.log("Collection books created!");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var newData = [{
    isbn: "978-12333222-25",
    title: "Le Grand Voyage",
    author: "sir. Abraham",
    category: "All Ages",
    stock:25
  },{
    isbn: "956-12313231-27",
    title: "Harry Potter and The Prisioner of Azkaban",
    author: "JK. Rowling",
    category: "Mature (14+)",
    stock:300
  },{
    isbn: "256-23355322-22",
    title: "Dragon Puncher",
    author: "James Kochalka",
    category: "All Ages",
    stock:21
  }];
  db.collection("books").insertMany(newData, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("books").find({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
