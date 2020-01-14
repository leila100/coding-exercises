/*
Given an array of integers, find the subset of non-adjacent elements with the maximum sum. 
Calculate the sum of that subset.

For example, given an array arr = [-2, 1, 3, -4, 5] we have the following possible subsets:

Subset      Sum
[-2, 3, 5]   6
[-2, 3]      1
[-2, -4]    -6
[-2, 5]      3
[1, -4]     -3
[1, 5]       6
[3, 5]       8
Our maximum subset sum is 8.

Function Description
Complete the maxSubsetSum function in the editor below. 
It should return an integer representing the maximum subset sum for the given array.

maxSubsetSum has the following parameter(s):
arr: an array of integers
*/

function maxSubsetSum(arr) {
  /*
    max @ position 0: value @ 0
    max @ position 1: either:
    value @ 0
    value @ 1
    from that point forward, the max of the next position is either:
        the current value at that position
        the max value found so far
        the max value from 2 positions back plus the current value
  */
  if (arr.length === 1) return arr[0];
  var maxSum = Math.max(arr[0], arr[1]);
  const cache = [arr[0], maxSum];
  for (let i = 2; i < arr.length; i++) {
    maxSum = Math.max(maxSum, arr[i], arr[i] + cache[i - 2]);
    cache.push(maxSum);
  }
  return maxSum;
}

// const arr = [-2, 1, 3, -4, 5, 6];
// const arr = [3, 7, 4, 6, 5];
// const arr = [2, 1, 5, 8, 4];
// const arr = [3, 5, -7, 8, 10];
const arr = [3, 5, 7];
console.log(maxSubsetSum(arr));
