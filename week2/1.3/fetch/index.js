const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      res.json().then(result => {
        result.map((item) => {
          const { address } = item
          const { geo } = address
          console.log(geo.lat)
        })
      })
    }).catch((err) => {
      console.log(err)
    })