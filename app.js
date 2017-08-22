const express = require("express")
const app = express()

const library = require("./router/library")

app.use('/', library)


app.listen(3000)
