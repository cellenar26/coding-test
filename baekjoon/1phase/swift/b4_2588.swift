import Foundation

//let line = readLine()!
//let lineArr = line.components(separatedBy: " ")
//let A = Int(lineArr[0])!
//let B = Int(lineArr[1])!
//let C = Int(lineArr[2])!
//
//print((A+B)%C)
//print(((A%C) + (B%C))%C)
//print((A*B)%C)
//print(((A%C) * (B%C))%C)

var first: Int =  Int(readLine()!)!
var second: Int = Int(readLine()!)!

var A: Int = first*(second%10)
var B: Int = first*((second%100)/10)
var C: Int = first*(second/100)
var D: Int = first*second

print(A)
print(B)
print(C)
print(D)
