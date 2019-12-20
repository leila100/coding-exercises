/*
You will be given an array of integers and a target value. 
Determine the number of pairs of array elements that have a difference equal to a target value.

For example, given an array of [1, 2, 3, 4] and a target value of 1, 
we have three values meeting the condition: 2-1=1, 32=1, and 4-3=1.

Function Description
Complete the pairs function below. 
It must return an integer representing the number of element pairs having the required difference.

pairs has the following parameter(s):
k: an integer, the target difference
arr: an array of integers
*/

// 2 pointers method
// function pairs(k, arr) {
//   var count = 0;
//   arr.sort(function sortTwoNumbers(a, b) {
//     return a - b;
//   });
//   var p1 = 0;
//   var p2 = 1;
//   while (p1 < arr.length && p2 < arr.length) {
//     let diff = arr[p2] - arr[p1];
//     if (diff == k) {
//       console.log(`found k diff between ${p1} and ${p2}: ${arr[p1]} and ${arr[p2]}`);
//       count++;
//       p1++;
//       p2 = p1 + 1;
//     } else if (diff < k) p2++;
//     else p1++;
//   }
//   return count;
// }

// using set method
function pairs(k, arr) {
  var arrSet = new Set(arr);
  var count = 0;
  for (num of arr) {
    let diff = num - k;
    if (arrSet.has(diff)) count++;
  }
  return count;
}

var arr = [1, 5, 3, 4, 2];
console.log(pairs(2, arr));
