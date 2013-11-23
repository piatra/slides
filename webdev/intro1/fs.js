var fs = require('fs')

//console.log(fs.readFileSync('/dev/urandom', 'utf-8'))

fs.readFile('/dev/urandom', 'utf-8', function (err, file) {

  console.log(file);

})


//var s = fs.createReadStream('/dev/urandom');
//s.pipe(process.stdout);
