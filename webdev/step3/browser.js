var io = require('engine.io-client')('ws://andreio.net:3000')
var container = require('container-el')
var socket = new io.Socket()

socket.onmessage = function (data) {
  var el = document.createElement('li')
  el.innerHTML = data
  container.appendChild(el)
}

socket.send('beep')
