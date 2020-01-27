/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

var permute = function(nums) {
  const stack = [];
  const s = new Set();
  stack.push(s);
  const solution = [];
  while (stack.length > 0) {
    const comb = stack.pop();
    for (num of nums) {
      if (comb.has(num)) continue;
      const newSet = new Set(comb);
      newSet.add(num);
      if (newSet.size === nums.length) solution.push(Array.from(newSet));
      else stack.push(newSet);
    }
  }
  return solution;
};

console.log(permute([1, 2, 3]));
