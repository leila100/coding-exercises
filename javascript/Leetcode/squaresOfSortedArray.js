/*
Given an array of integers A sorted in increasing order, 
return an array of the squares of each number, also sorted in increasing order.

Example 1:
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 
Note:
1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in increasing order.
*/

var sortedSquares = function(A) {
  // go through array and find the index where before all nums < 0 and after all nums > 0
  let i = 0;
  while (i < A.length) {
    if (A[i] >= 0) break;
    i++;
  }
  if (i === 0 || i === A.length) return A.map(num => num * num);
  const solution = [];
  let left = i - 1;
  let right = i;
  while (left >= 0 && right < A.length) {
    const l2 = Math.pow(A[left], 2);
    const r2 = Math.pow(A[right], 2);
    if (r2 < l2) {
      solution.push(r2);
      right++;
    } else {
      solution.push(l2);
      left--;
    }
  }
  if (left < 0) {
    while (right < A.length) {
      const r2 = Math.pow(A[right], 2);
      solution.push(r2);
      right++;
    }
  }
  if (right >= A.length) {
    while (left >= 0) {
      const l2 = Math.pow(A[left], 2);
      solution.push(l2);
      left--;
    }
  }
  return solution;
};

// const arr = [-4, -1, 0, 3, 10];
// const arr = [-7, -3, 2, 3, 11];
// const arr = [-1];
// const arr = [-1, 1];
const arr = [-2, 0];
console.log(sortedSquares(arr));
