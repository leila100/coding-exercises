/*
Given an array of integers, find and print the maximum number of integers you can select from the array such that the 
absolute difference between any two of the chosen integers is less than or equal to . 
For example, if your array is a=[1, 1, 2, 2, 4, 4, 5, 5, 5], you can create two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. 
The maximum length subarray has 5 elements.
*/

function pickingNumbers(a) {
  // build a dict for the number of count
  const num_counts = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i] in num_counts) {
      num_counts[a[i]] += 1;
    } else {
      num_counts[a[i]] = 1;
    }
  }
  console.log(num_counts);
  let max_num = 0;
  let length;
  for (let i = 0; i < a.length; i++) {
    const num = num_counts[a[i]];
    let lower = num_counts[a[i] - 1];
    let higher = num_counts[a[i] + 1];
    if (!lower) lower = 0;
    if (!higher) higher = 0;
    length = num + Math.max(lower, higher);
    if (length > max_num) max_num = length;
  }
  return max_num;
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
console.log(pickingNumbers([]));
console.log(pickingNumbers([1, 2]));
console.log(pickingNumbers([1, 3]));
