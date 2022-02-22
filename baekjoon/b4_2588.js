const fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var input = fs.readFileSync('./test.txt').toString().split('\n');
const a = parseInt(input[0]);
const b = input[1];
// console.log(a);
// console.log(b)

const b1 = parseInt(b.charAt(0))
const b2 = parseInt(b.charAt(1))
const b3 = parseInt(b.charAt(2))

console.log(a*b3) 
console.log(a*b2)
console.log(a*b1)
console.log(a*parseInt(b))