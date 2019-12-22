/*
A modified Kaprekar number is a positive whole number with a special property. 
If you square it, then split the number into two integers and sum those integers, 
you have the same value you started with.

Consider a positive whole number n with d digits. 
We square n to arrive at a number that is either 2xd digits long or (2xd)-1 digits long. 
Split the string representation of the square into two parts, l and r. 
The right hand part, r must be d digits long. 
The left is the remaining substring. 
Convert those two substrings back to integers, add them and see if you get n.

For example, if n=5, d=1 then n2=25. We split that into two strings and convert them back to integers 2 and 5. 
We test 2+5=7 != 9, so this is not a modified Kaprekar number. 
If n=9, still d=1, and n2=81. 
This gives us 1+8=9, the original n.

Note: r may have leading zeros.

Here's an explanation from Wikipedia about the ORIGINAL Kaprekar Number (spot the difference!):
In mathematics, a Kaprekar number for a given base is a non-negative integer, the representation of whose square 
in that base can be split into two parts that add up to the original number again. 
For instance, 45 is a Kaprekar number, because 45² = 2025 and 20+25 = 45.

Given two positive integers p and q where p is lower than q, 
write a program to print the modified Kaprekar numbers in the range between p and q, inclusive.

Function Description

Complete the kaprekarNumbers function in the editor below. 
It should print the list of modified Kaprekar numbers in ascending order.

kaprekarNumbers has the following parameter(s):
p: an integer
q: an integer
*/

function kaprekarNumbers(p, q) {
  var answer = [];
  for (let num = p; num <= q; num++) {
    var sqrStr = (num * num).toString();
    var d = Math.floor(sqrStr.length / 2);
    var num1 = sqrStr.substring(0, d);
    var num2 = sqrStr.substring(d, sqrStr.length);
    if (!num1) num1 = 0;
    // console.log(sqrStr, d, num1, num2);
    if (parseInt(num1) + parseInt(num2) == num) answer.push(num);
  }
  if (answer.length == 0) console.log("INVALID RANGE");
  else console.log(answer.join(" "));
}

const p = 400;
const q = 700;
kaprekarNumbers(p, q);
