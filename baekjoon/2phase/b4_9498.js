var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString()
// var input = fs.readFileSync('./test.txt').toString().split(' ');
// var a = parseInt(input[0]);
const a = fs.readFileSync('/dev/stdin')

function solution(num) {
    if (num >=90 && num <= 100) {
        console.log('A')
    }
    else if (num <=89 && num >= 80) {
        console.log('B')
    }
    else if (num <= 79 && num >= 70) {
        console.log('C')
    }
    else if (num <= 69 && num >= 60) {
        console.log('D')
    }
    else {
        console.log('F')
    }
} 
solution(a)