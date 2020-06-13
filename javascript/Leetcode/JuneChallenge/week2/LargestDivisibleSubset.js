/*
Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

Si % Sj = 0 or Sj % Si = 0.

If there are multiple solutions, return any subset is fine.

Example 1:

Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)
Example 2:

Input: [1,2,4,8]
Output: [1,2,4,8]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  if (nums === null || nums.length === 0) return [];

  const len = nums.length;
  nums.sort((a, b) => a - b);

  //dp[i] stores the max len list ends in dp[i], initial = 1
  const dp = Array(len).fill(1);

  let maxLen = 1; //store max list len
  let maxNum = nums[0]; //store the max num in this longest divisible list
  //update dp, see if there's any other elements can be divided by nums[i]
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
        if (dp[i] > maxLen) {
          maxNum = nums[i];
          maxLen = dp[i];
        }
      }
    }
  }

  const rst = [];
  for (let i = 0; i < len; i++) {
    if (maxNum % nums[i] === 0) {
      rst.push(nums[i]);
      if (rst.length === maxLen) break;
    }
  }
  return rst;
};

const nums = [1, 2, 8, 4, 16, 3];
console.log(largestDivisibleSubset(nums));
