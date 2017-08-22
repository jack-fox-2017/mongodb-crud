# mongodb-crud

## REST API

List of user routes:

Route | HTTP | Description
------|------|------------
`/api/books` | POST | Create a book
`/api/books` | GET | Get all the books
`/api/books/:isbn` | GET | Get a single book by ISBN
`/api/books/:isbn` | DELETE | Delete a book by ISBN
`/api/books/:isbn` | PUT | Update a book by ISBN with new info


## Usage
With only npm:
```
npm install
npm start
npm run dev
```

Access from localhost via http://localhost:3000 or API via http://localhost:3000/api
