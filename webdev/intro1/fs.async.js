var fs = require('fs')
var stream = fs.createReadStream('index.js')

stream.pipe(process.stdout)
