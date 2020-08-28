const booksModel = require('../models/books')
const { success, failed } = require('../helpers/response')

const books = {
  getAll: (req, res) => {
    const nama = !req.query.nama ? '' : req.query.nama
    booksModel.getAll(nama)
    .then((result) => {
      success(res, result, 'Get all books success')
    })
    .catch((err) => {
      failed(res, [], err.message)
    })
  },
  getDetail: (req, res) => {
    const id = req.params.id_buku
    booksModel.getDetail(id)
    .then((result) => {
      success(res, result, 'Get detail book success')
    })
    .catch((err) => {
      failed(res, [], err.message)
    })
  },
  insert: (req, res) => {
    const body = req.body
    booksModel.insert(body)
    .then((result) => {
      success(res, result, 'Insert books success')
    })
    .catch((err) => {
      failed(res, [], err.message)
    })
  },
  update: (req, res) => {
    const id = req.params.id_buku
    const body = req.body
    booksModel.update(body, id)
    .then((result) => {
      success(res, result, 'Update books success')
    })
    .catch((err) => {
      failed(res, [], err.message)
    })
  },
  destroy: (req, res) => {
    const id = req.params.id
    booksModel.destroy(id)
    .then((result) => {
      success(res, result, 'Delete book success')
    })
    .catch((err) => {
      failed(res, [], err.message)
    })
  }
}

module.exports = books