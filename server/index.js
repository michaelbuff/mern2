const express = require('express')
const port = 3006

const app = express()

app.get('/', function (req, res) {
    res.send('Server running!')
  })
  
  app.listen(3000)
  