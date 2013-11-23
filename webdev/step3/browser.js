var io = require('engine.io-client')
var container = require('container-el')
var socket = new io.Socket()

socket.onmessage = function (data) {
  var el = document.createElement('li')
  el.innerHTML = data
  container.appendChild(el)
}

