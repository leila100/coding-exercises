/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  //   console.log(nums);
  let start = 0;
  let end = nums.length - 1;
  return findIndex(nums, target, start, end);
};

var findIndex = function (nums, target, start, end) {
  console.log(start, end);
  if (start >= end) {
    if (nums[start] === target) return start;
    if (nums[start] < target) return start + 1;
    else return start;
  }
  let middle = Math.ceil((end - start) / 2);
  console.log(middle);
  if (nums[start + middle] === target) return start + middle;
  if (nums[start + middle] > target) return findIndex(nums, target, start, end - middle);
  else return findIndex(nums, target, start + middle, end);
};

// const nums = [1, 3, 5, 6];
// const nums = [2, 7, 8, 9, 10];
const nums = [3, 4, 9, 10];
// console.log(searchInsert(nums, 5));
// console.log(searchInsert(nums, 0));
// console.log(searchInsert(nums, 7));
// console.log(searchInsert(nums, 9));
console.log(searchInsert(nums, 5));
