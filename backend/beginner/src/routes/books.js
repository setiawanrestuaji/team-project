const express = require('express')
const booksController = require('../controllers/books')

const router = express.Router()

router
  .get('/getall', booksController.getAll)
  .get('/getdetail/:id_buku', booksController.getDetail)
  .post('/insert', booksController.insert)
  .put('/update/:id_buku', booksController.update)
  .delete('/delete/:id', booksController.destroy)

module.exports = router