const express = require('express')
const app = express()



app.get('/', (req, res) => {
  res.send('tessssssssssssssss')
})

const bookRouter = require('./routes/book')

app.use('/books', bookRouter)






app.listen(3000)
