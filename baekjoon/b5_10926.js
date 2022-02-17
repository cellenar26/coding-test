var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().trim();
var input = fs.readFileSync('./test.txt').toString().trim();
console.log(input)
console.log(`${input}??!`);