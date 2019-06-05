const express = require('express')
const path = require('path')
const app = express()

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'about.html'))
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'))
})

app.use(express.static(path.join(__dirname, '/react/build')))

app.get('/users', function(req, res) {
  res.sendFile(path.join(__dirname, '/react/build', 'index.html'))
})

app.get('/new*', function(req, res) {
  res.sendFile(path.join(__dirname, '/react/build', 'index.html'))
})

app.listen(5000)
