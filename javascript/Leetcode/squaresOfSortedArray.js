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
  const len = A.length;
  const squares = Array(len);
  let start = 0;
  let end = len - 1;

  for (let i = end; i >= 0; i--) {
    const sq1 = A[start] ** 2;
    const sq2 = A[end] ** 2;

    if (sq1 > sq2) {
      squares[i] = sq1;
      start++;
    } else {
      squares[i] = sq2;
      end--;
    }
  }

  return squares;
};

// const arr = [-4, -1, 0, 3, 10];
// const arr = [-7, -3, 2, 3, 11];
// const arr = [-1];
// const arr = [-1, 1];
const arr = [-2, 0];
console.log(sortedSquares(arr));
