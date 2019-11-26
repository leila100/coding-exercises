/*
You are helping an archaeologist decipher some runes. 
He knows that this ancient society used a Base 10 system, 
and that they never start a number with a leading zero. 
He's figured out most of the digits as well as a few operators, 
but he needs your help to figure out the rest.

The professor will give you a simple math expression, of the form
[number][op][number]=[number]
He has converted all of the runes he knows into digits. 
The only operators he knows are addition (+),subtraction(-), and multiplication (*), 
so those are the only ones that will appear. 
Each number will be in the range from -1000000 to 1000000, 
and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. 
If there are ?s in an expression, they represent a digit rune that the professor doesn't know 
(never an operator, and never a leading -). 
All of the ?s in an expression will represent the same digit (0-9), 
and it won't be one of the other given digits in the expression. 
No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

Given an expression, figure out the value of the rune represented by the question mark. 
If more than one digit works, give the lowest one. 
If no digit works, well, that's bad news for the professor - 
it means that he's got some of his runes wrong. output -1 in that case.

Complete the method to solve the expression to find the value of the unknown rune. 
The method takes a string as a parameter representing the expression and will return an int 
value representing the unknown rune or -1 if no such rune exists.
*/

function solveExpression(exp) {
  // find the operator
  let operator;
  if (exp.indexOf('+') !== -1) operator = "+"
  else if (exp.indexOf('*') !== -1) operator = "*"
  else operator = "-"
 
 // fund first and second number
  const [num, res] = exp.split("=")
  const nums = num.split(operator)
  let opr1, opr2;
  if (nums.length === 2) [opr1, opr2] = [nums[0], nums[1]]
  else if (nums.length > 2){
    opr1 = nums[0] === "" ? `-${nums[1]}` : nums[0]
    opr2 = nums[nums.length-2] === "" ? `-${nums[nums.length-1]}` : nums[nums.length-2]
  }
  for (let i=0; i<10; i++) {
      // if i exists in the expression, find another i
      if (exp.indexOf(i) !== -1) continue;
      const num1 = opr1.replace(/\?/g, i.toString())
      const num2 = opr2.replace(/\?/g, i.toString())
      const result = res.replace(/\?/g, i.toString())
      // the numbers, and result cannot have leading 0s
      if (num1.indexOf("00") === 0 || num2.indexOf("00") === 0 || result.indexOf("00") === 0) {
          continue
      }
      // numbers can start with 0 unless they are 0
      if(num1.indexOf("0") === 0 && parseInt(num1) !== 0) continue
      else if(num2.indexOf("0") === 0 && parseInt(num2) !== 0) continue
      if(result.indexOf("0") === 0 && parseInt(result) !== 0) continue
      const new_num1 = parseInt(num1);
      const new_num2 = parseInt(num2);
      const new_result = parseInt(result);

      if (operator === '+' && new_num1 + new_num2 === new_result) return i
      else if (operator === '*' && new_num1 * new_num2 === new_result) return i
      else if (operator === '-' && new_num1 - new_num2 === new_result) return i
  }
  return -1
}

// console.log(solveExpression('19--45=5?'))
// console.log(solveExpression('-19--45=5?'))
console.log(solveExpression('?*11=??'))
console.log(solveExpression('45*?=?'))
console.log(solveExpression('-5?*-1=5?'))