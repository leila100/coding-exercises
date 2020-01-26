/*
Implement atoi which converts a string to an integer.
The function first discards as many whitespace characters as necessary 
until the first non-whitespace character is found. 
Then, starting from this character, takes an optional initial plus or 
minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, 
which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, 
or if no such sequence exists because either str is empty or it contains only whitespace 
characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:
Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers 
within the 32-bit signed integer range: [−231,  231 − 1]. 
If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

Example 1:
Input: "42"
Output: 42

Example 2:
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.

Example 3:
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

Example 4:
Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.

Example 5:
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Therefore INT_MIN (−231) is returned.
*/

var myAtoi = function(str) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const strArr = str.trim().split("");
  let number = null;
  let pos = 0;
  let maxNum = Math.pow(2, 31) - 1;
  let minNum = -Math.pow(2, 31);
  let tmp = null;
  for (let i = strArr.length - 1; i >= 0; i--) {
    const val = strArr[i];
    if (!(val in digits) || val === " ") {
      if (number !== null) {
        if (val === "." || (val !== "-" && val !== "+")) {
          number = null;
          pos = 0;
        } else {
          if (strArr[i + 1] === "-" || strArr[i + 1] === "+") {
            number = null;
            pos = 0;
          } else if (val === "-") {
            if (tmp > maxNum) {
              number = minNum;
            } else number *= -1;
          }
        }
      } else continue;
    } else {
      if (number === null) number = 0;
      else {
        if (!(strArr[i + 1] in digits)) {
          number = null;
          pos = 0;
        }
      }
      tmp = BigInt(number + parseInt(val) * Math.pow(10, pos));
      if (tmp >= maxNum) number = maxNum;
      else number += parseInt(val) * Math.pow(10, pos);
      pos++;
    }
  }
  if (number === null) return 0;
  return number;
};

// console.log(myAtoi("   -42"));
// console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
// console.log(myAtoi("3.14159"));
// console.log(myAtoi("42+-2"));
// console.log(myAtoi("  -0012a42"));
// console.log(myAtoi("-2147483647"));
console.log(myAtoi("0-1"));
