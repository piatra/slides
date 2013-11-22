var io = require('engine.io-client')
var socket = new io.Socket()

socket.on('message', function (data) {
  console.log(data)
})

socket.send('andrei')
