# mongodb-crud

# mongodb-crud


## File and Folder 
    ```bash

    .
    ├── README.md
    │   └── controllers
    │   │   └── bookController.js
    │   └── routes
    │   │   └── books.js
    │   │   └── index.js
    ├── package.json
    ├── app.js


**Create Database using MongoDB**

    npm install --save mongodb
    mongo
    use library (DB name)

**Create Collections from DB library**

    db.createCollection('books')

**Insert Data more than one**

    db.books.insertMany([
      {
        isbn:'978-1-60309-057-5',
        title:'Dragon Puncher',
        author:'James Kochalka',
        category:'All Ages',
        stock:3
      },
      { 
        isbn:'978-1-891830-77-8',
        title:'Every Girl is the End of the World for Me',
        author:'Jeffrey Brown',
        category:'Mature (16+)',
        stock:5
      }
    ])

**See data from books Collections**

    db.books.find()

    { 
      "_id" : ObjectId("5976cb6c98f0c1b0bc22f71d"),
      "isbn" : "978-1-60309-057-5",
      "title" : "Dragon Puncher",
      "author" : "James Kochalka",
      "category" : "All Ages",
      "stock" : 3
    },
    {
       "_id" : ObjectId("5976cb6c98f0c1b0bc22f71e"),
       "isbn" : "978-1-891830-77-8",
       "title" : "Every Girl is the End of the World for Me",
       "author" : "Jeffrey Brown",
       "category" : "Mature (16+)",
       "stock" : 5
    }


### Setting route

routes | HTTP | Description
-------|------|------------
/books | GET | User can see all books
/books | POST | Insert new books
/books/:id   | GET | Get book information detail with /:_id inputed
/books/:id | PUT | Update or Edit book information detail with /:_id inputed
/books/:id | DELETE | Delete book information detail with /:_id inputed



### For Running the application Step by Step:


**1st Step**

    npm start

    using postman go to url : (GET) http://localhost:3000/books
    
    you can see the books detail in books collections (table books)


**2nd Step**

    Using postman go to url : (POST) http://localhost:3000/books
    
    input new book 
    
    fill on x-www-form-urlencoded key & value
    
    isbn : xxx-x-xxxxxx-xx-x
    title : book title
    author : the author
    category : book category (e.g drama, Mature (16+)
    stock : 5
    
    
**3rd Step**

    Using postman go to url : (GET) http://localhost:3000/books/:id 
    
    you can see the book information detail by book id that you choose.
    

**4th Step**

    Using postman go to url : (PUT) http://localhost:3000/books/:id
    
    input new book 
    
    fill on x-www-form-urlencoded key & value
    
    isbn : xxx-x-xxxxxx-xx-x
    title : book title edit
    author : the author edit
    category : book category (e.g drama, Mature (16+)
    stock : 5

**5th Step**

    Using postman go to url : (DELETE) http://localhost:3000/books
    
    Delete the book information detail by book id that you choose.
