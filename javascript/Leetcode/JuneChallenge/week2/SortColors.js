/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let front = 0;
  let back = nums.length - 1;
  while (front <= nums.length && nums[front] === 0) front++;
  while (back >= 0 && nums[back] === 2) back--;
  if (front === back) return nums;
  let i = front;
  while (i <= back) {
    if (nums[i] === 2) {
      nums[i] = nums[back];
      nums[back] = 2;
      back--;
      while (back >= i && nums[back] === 2) back--;
    }
    if (nums[i] === 0) {
      nums[i] = nums[front];
      nums[front] = 0;
      front++;
    }
    i++;
  }
  return nums;
};

var sortColors2 = (nums) => {
  let j = 0;
  let k = nums.length - 1;
  const swap = (a, b) => {
    const t = nums[a];
    nums[a] = nums[b];
    nums[b] = t;
  };
  for (let i = 0; i <= k; i++) {
    if (nums[i] === 2) {
      swap(i--, k--);
    } else if (nums[i] === 0) {
      swap(i, j++);
    }
  }
  return nums;
};

// const nums = [2, 0, 2, 1, 1, 0];
const nums = [0, 2, 2, 2, 0, 2, 1, 1];
console.log(sortColors(nums));
console.log(sortColors2(nums));
