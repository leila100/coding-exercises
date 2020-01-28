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

var permuteRecursive = function(nums) {
  let output = [];

  recurFill([], nums);

  function recurFill(permutation, nums_remaining) {
    // Base case, all numbers added
    if (nums_remaining.length == 0) {
      output.push(permutation.slice());
      return;
    }

    for (let i = 0; i < nums_remaining.length; i++) {
      // Add the current number to the permutation
      permutation.push(nums_remaining[0]);
      // Take the remaining numbers and remove the first element
      let removed = nums_remaining.shift();
      // Call the recursive function with the current permutation
      recurFill(permutation, nums_remaining);
      // Pop the number off the permutation again
      permutation.pop();
      // Add the number from the remaining numbers for permutations back into the array
      nums_remaining.push(removed);
    }
  }

  return output;
};

// console.log(permute([1, 2]));
console.log(permuteRecursive([1, 2, 3]));
