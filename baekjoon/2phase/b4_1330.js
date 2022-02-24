var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// var input = fs.readFileSync('./test.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

function solution(first, second) {
    if (first > second) {
        console.log('>')
    }
    else if (first < second) {
        console.log('<')
    }
    else {
        console.log('==')
    }
}

solution(a,b)