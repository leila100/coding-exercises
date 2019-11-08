/*
Sorting is useful as the first step in many different tasks. 
The most common task is to make finding things easier, but there are other uses as well. 
In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.
Given a list of unsorted integers, arr, find the pair of elements that have the smallest absolute difference between them. 
If there are multiple pairs, find them all.
*/

function closestNumbers(arr) {
  // sort the array so you only have to compare the number and the next number instead of all the pairs possible
  arr.sort((a, b) => a - b);
  let min;
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (!min) min = Math.abs(arr[i] - arr[i + 1]);
    const diff = Math.abs(arr[i] - arr[i + 1]);
    if (diff === min) {
      result.push(arr[i]);
      result.push(arr[i + 1]);
    } else if (diff < min) {
      result = [];
      result.push(arr[i]);
      result.push(arr[i + 1]);
      min = diff;
    }
  }
  return result;
}

// const arr = [5, 2, 3, 4, 1];
// const arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854];
const arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470];
console.log(closestNumbers(arr));
