var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split(' ');
 var input = fs.readFileSync('./test.txt').toString().split(' ');
var A = parseInt(input[0]);
var B = parseInt(input[1]);
const C = parseInt(input[2])
console.log((A+B)%C)
console.log(((A%C) + (B%C))%C)
console.log((A*B)%C)
console.log(((A%C) * (B%C))%C)