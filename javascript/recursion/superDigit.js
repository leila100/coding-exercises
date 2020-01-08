/*
We define super digit of an integer x using the following rules:
Given an integer, we need to find the super digit of the integer.
If x has only 1 digit, then its super digit is x.
Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
For example, the super digit of 9875 will be calculated as:
	super_digit(9875)   	9+8+7+5 = 29 
	super_digit(29) 	2 + 9 = 11
	super_digit(11)		1 + 1 = 2
	super_digit(2)		= 2  
You are given two numbers n and k. 
The number p is created by concatenating the string n k times. 
Continuing the above example where n=9875, assume your value k=4. 
Your initial p = 9875 9875 9875 9875 (spaces added for clarity).

    superDigit(p) = superDigit(9875987598759875)
                  5+7+8+9+5+7+8+9+5+7+8+9+5+7+8+9 = 116
    superDigit(p) = superDigit(116)
                  1+1+6 = 8
    superDigit(p) = superDigit(8)
All of the digits of p sum to 116. The digits of 116 sum to 8. 
8 is only one digit, so it's the super digit.

Function Description
Complete the function superDigit in the editor below. 
It must return the calculated super digit as an integer.

superDigit has the following parameter(s):
n: a string representation of an integer
k: an integer, the times to concatenate n to make p
*/

function superDigit(n, k) {
    var initialSuper = recursiveSuperDigit(n);
    var p = parseInt(initialSuper) * parseInt(k)
    return recursiveSuperDigit(p.toString())
}

function sumDigits(p) {
    var x = p.toString()
    var sum = 0;
    for (let num of x) sum += parseInt(num)
    return sum;
}

function recursiveSuperDigit(p) {
    if (p.length === 1) return p;
    var sum = sumDigits(p)
    return recursiveSuperDigit(sum.toString())
}

// var n = '9875'
// console.log(superDigit(n, 4))
var n = '148'
console.log(superDigit(n, 3))