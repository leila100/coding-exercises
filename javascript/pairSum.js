/*
Given an integer array, output all pairs that sum up to a specific value k.
*/

// O(nlog(n)) solution
function pairSum(arr, k) {
  // sort the array
  arr.sort((a, b) => a - b);
  // Have two pointers, one at beginning, and one at end
  var start = 0;
  var end = arr.length - 1;
  var solution = [];
  while (start < end) {
    let sum = arr[end] + arr[start];
    // If sum = k add (start, end) to solution
    if (sum === k) {
      solution.push([arr[start], arr[end]]);
      start++;
      end--;
    }
    // if sum < k increment start
    else if (sum < k) start++;
    // if diff > k decrement end
    else if (sum > k) end--;
  }
  return solution;
}

// O(n) solution
function sumPairs(arr, k) {
  var diffs = {};
  var solution = [];
  var chosen = new Set();
  for (num of arr) {
    diffs[num] = k - num;
  }
  for (num of arr) {
    if (k - num in diffs && !chosen.has(num)) {
      solution.push([num, k - num]);
      chosen.add(num);
      chosen.add(k - num);
    }
  }
  return solution;
}

// an other O(n) solution
function sumPairs2(arr, k) {
  var seen = new Set();
  var solution = [];
  for (num of arr) {
    if (seen.has(k - num)) solution.push([num, k - num]);
    else seen.add(num);
  }
  return solution;
}

const arr = [0, 10, 7, 11, 3, 13, 2, 12, 8];
// console.log(pairSum(arr, 10));
console.log(sumPairs(arr, 10));
console.log(sumPairs2(arr, 10));
