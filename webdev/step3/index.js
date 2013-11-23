var express = require('express')
var app = express()
var server = require('http').createServer(app).listen(3000)
var browserify = require('browserify')
var io = require('engine.io').attach(server)

app.get('/', function (req, res) {

  res.end('<script src="/bundle.js"></script>')

})

app.get('/bundle.js', function (req, res) {

  browserify(__dirname + '/browser.js')
  .bundle({debug: true})
  .pipe(res)

})


io.on('connection', function (socket) {
  
  socket.send('Welcome')

  socket.on('message', function (msg) {
    socket.send(msg.replace(/[aeiou]{2,}/, 'oo').toUpperCase())
  })

})

