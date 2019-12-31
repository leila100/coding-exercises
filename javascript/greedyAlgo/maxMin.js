/*
You will be given a list of integers, arr, and a single integer k. 
You must create an array of length k from elements of arr such that its unfairness is minimized. 
Call that array subArr. Unfairness of an array is calculated as max(subArr) - min(subArr)

Where:
- max denotes the largest integer in subArr
- min denotes the smallest integer in subArr

As an example, consider the array [1, 4, 7, 2] with a k of 2. 
Pick any two elements, test subArr=[4, 7].
unfairness = max([4, 7]) - min([4, 7]) = 7 - 4 = 3
Testing for all pairs, the solution [1, 2] provides the minimum unfairness.

Note: Integers in arr may not be unique.

Function Description
Complete the maxMin function in the editor below. 
It must return an integer that denotes the minimum possible value of unfairness.

maxMin has the following parameter(s):

k: an integer, the number of elements in the array to create
arr: an array of integers .
*/

function maxMin(k, arr) {
  // sort arr
  arr.sort((a, b) => a - b);
  var unfairness = null;
  // for each element of arr, unfairness will be arr[i+k] - that element
  for (let i = 0; i < arr.length - k + 1; i++) {
    let unfair = arr[i + k - 1] - arr[i];
    if (unfairness == null || unfair < unfairness) unfairness = unfair;
  }
  return unfairness;
}

// const arr = [1, 4, 7, 2];
const arr = [10, 100, 300, 200, 1000, 20, 30, 100];
console.log(maxMin(3, arr));
