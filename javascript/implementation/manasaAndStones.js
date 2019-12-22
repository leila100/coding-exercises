/*
Manasa is out on a hike with friends. She finds a trail of stones with numbers on them. 
She starts following the trail and notices that any two consecutive stones' numbers differ by one of two values. 
Legend has it that there is a treasure trove at the end of the trail. 
If Manasa can guess the value of the last stone, the treasure will be hers.

For example, assume she finds 2 stones and their differences are a=2 or b=3. 
We know she starts with a 0 stone not included in her count. 
The permutations of differences for the two stones would be [2, 2], [2, 3], [3, 2] or [3, 3]. 
Looking at each scenario, stones might have [2, 4], [2, 5], [3, 5] or [3, 6] on them. 
The last stone might have any of 4, 5, or 6 on its face.

Compute all possible numbers that might occur on the last stone given a starting stone with a 0 on it, 
a number of additional stones found, and the possible differences between consecutive stones. 
Order the list ascending.

Function Description

Complete the stones function in the editor below. 
It should return an array of integers representing all possible values of the last stone, sorted ascending.

stones has the following parameter(s):
n: an integer, the number of non-zero stones
a: one possible integer difference
b: another possible integer difference
*/

function stones(n, a, b) {
  var answer = new Set();
  answer.add(a * (n - 1));
  answer.add(b * (n - 1));
  for (i = 2; i < n; i++) {
    answer.add(a * (n - i) + (i - 1) * b);
    answer.add(b * (n - i) + (i - 1) * a);
  }
  var answerArr = Array.from(answer).sort((n1, n2) => n1 - n2);
  return answerArr;
}

// console.log(stones(3, 1, 2));
// console.log(stones(4, 10, 100));
console.log(stones(7, 9, 11));
console.log(stones(1, 9, 11));
