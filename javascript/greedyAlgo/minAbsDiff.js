/*
Consider an array of integers, arr. 
We define the absolute difference between two elements, a[i] and a[j] (where i != j), 
to be the absolute value of a[i] - a[j].

Given an array of integers, find and print the minimum absolute difference between any two elements in the array. 
For example, given the array arr = [-2, 2, 4] we can create 3 pairs of numbers: [-2, 2], [-2, 4] and [2, 4]. 
The absolute differences for these pairs are 4, 6 and 2. 
The minimum absolute difference is 2.

Function Description
Complete the minimumAbsoluteDifference function in the editor below. 
It should return an integer that represents the minimum absolute difference between any pair of elements.

minimumAbsoluteDifference has the following parameter(s):
n: an integer that represents the length of arr
arr: an array of integers
*/

function minimumAbsoluteDifference(arr) {
  // sort the array
  // each difference between arr[i] and arr[i+1] would be the smaller for that element arr[i]
  // compare each element with the next element, until we compared all
  // get the smallest difference
  arr.sort((a, b) => a - b);
  var minDiff = null;
  for (let i = 0; i < arr.length - 1; i++) {
    const currentMin = Math.abs(arr[i] - arr[i + 1]);
    if (minDiff == null || currentMin < minDiff) minDiff = currentMin;
  }
  return minDiff;
}

arr = [3, -7, 0];
console.log(minimumAbsoluteDifference(arr));
