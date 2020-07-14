/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

/**
 * @param {number[]} height
 * @return {number}
 */
const calcVol = (leftHeight, rightHeight, diff) => {
  return Math.min(leftHeight, rightHeight) * diff;
};

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxVol = 0;
  while (left < right) {
    const volume = calcVol(height[left], height[right], right - left);
    if (height[left] < height[right]) left++;
    else right--;
    maxVol = Math.max(volume, maxVol);
  }
  return maxVol;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
