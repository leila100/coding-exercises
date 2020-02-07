/*
Given a m x n grid filled with non-negative numbers, find a path from top left to 
bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let minSum = null;
  const stack = [];
  stack.push([[0, 0]]);
  while (stack.length > 0) {
    const currentPath = stack.pop();
    const l = currentPath.length;
    if (currentPath[l - 1][0] === m - 1 && currentPath[l - 1][1] === n - 1) {
      console.log(currentPath);
      let sum = 0;
      for (let i = 0; i < l; i++) {
        sum += grid[currentPath[i][0]][currentPath[i][1]];
      }
      if (minSum === null || sum < minSum) minSum = sum;
      console.log(`sum: ${sum}, minSum: ${minSum}`);
    } else {
      const x = currentPath[l - 1][0];
      const y = currentPath[l - 1][1];
      const newPath = [...currentPath];
      if (x + 1 < m) stack.push([...newPath, [x + 1, y]]);
      if (y + 1 < n) stack.push([...newPath, [x, y + 1]]);
    }
  }
  return minSum;
};

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];
console.log(minPathSum(grid));
