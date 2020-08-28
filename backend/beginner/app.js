const express = require('express')
const bodyParser = require('body-parser')
const booksRouter = require('./src/routes/books')
const PORT = 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/books', booksRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})