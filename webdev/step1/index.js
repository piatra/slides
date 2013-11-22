var http = require('http')
var browserify = require('browserify')

http.createServer(handleRequest).listen(3000)

function handleRequest (req, res) {
  if (req.url == '/') {
    res.end('<script src="bundle.js"></script>')
  } else if ('/bundle.js') {
    browserify(__dirname + '/browser.js')
    .bundle({debug: true})
    .pipe(res)
  } else {
    res.end('nope')
  }

}
