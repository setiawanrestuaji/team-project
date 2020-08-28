const db = require('../configs/db')

const books = {
  getAll: (nama) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM books WHERE title LIKE '%${nama}%'`, (err, result) => {
        if(err){
          reject(new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  getDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM books WHERE id='${id}'`, (err, result) => {
        if(err){
          reject(new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  insert: (data) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO books (title, description, author, price) 
      VALUES ('${data.title}','${data.description}','${data.author}','${data.price}')`, (err, result) => {
        if(err){
          reject(new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  update: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE books SET 
        title='${data.title}', 
        description='${data.description}', 
        price='${data.price}',
        author='${data.author}'
        WHERE id='${id}'
      `, (err, result) => {
        if(err){
          reject(new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  destroy: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM books WHERE id='${id}'`, (err, result) => {
        if(err){
          reject(err)
        }else{
          resolve(result)
        }
      })
    })
  }
}

module.exports = books