var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var input = fs.readFileSync('./test.txt').toString()
console.log(parseInt(input)-543)
