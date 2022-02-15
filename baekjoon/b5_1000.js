const fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = fs.readFileSync('./test.txt').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a+b);