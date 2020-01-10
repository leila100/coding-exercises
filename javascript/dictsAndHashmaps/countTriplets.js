/*
You are given an array and you need to find number of triplets of indices (i, j, k) such that the elements at 
those indices are in geometric progression (sequence of numbers where each term after the first is found by 
multiplying the previous one by a fixed, non-zero number called the common ratio) for a given common ratio r and i < j < k.

For example, arr = [1, 4, 16, 64]. If r=4, we have [1, 4, 16] and  [4, 16, 64] at indices (0, 1, 2) and (1, 2, 3).

Function Description
Complete the countTriplets function in the editor below. 
It should return the number of triplets forming a geometric progression for a given r as an integer.

countTriplets has the following parameter(s):
arr: an array of integers
r: an integer, the common ratio
*/

function countTriplets(arr, r) {
  // stores number of arrays with two elements that can be formed if we find the key
  const potential_two = {};
  // stores number of arrays with three elements that can be formed if we find the key
  const potential_three = {};
  var count = 0;
  for (num of arr) {
    // num completes the three arrays given we have already found num/(r^2) and num/r
    if (num in potential_three) count += potential_three[num];
    // For any element of array we can form three element tuples if we find num*r given num/r is already found.
    // Also num forms the second element.
    if (!(num in potential_two)) potential_two[num] = 0;
    if (num * r in potential_three) potential_three[num * r] += potential_two[num];
    else potential_three[num * r] = potential_two[num];
    // For any element of array we can form two element tuples if we find num*r.
    // Also num forms the first element.
    if (num * r in potential_two) potential_two[num * r] += 1;
    else potential_two[num * r] = 1;
  }
  return count;
}

const arr1 = [1, 4, 16, 64];
console.log(countTriplets(arr1, 4));
// const arr2 = [1, 2, 2, 4];
// console.log(countTriplets(arr2, 2));
// const arr3 = [3, 2, 3, 4, 3];
// console.log(countTriplets(arr3, 1));
// const arr4 = [1, 3, 9, 9, 27, 81];
// console.log(countTriplets(arr4, 3));
// const arr = [1, 2, 1, 2, 4];
// console.log(countTriplets(arr, 2));
// const str =
//   "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1";
// const arr = str.split(" ");
// console.log(countTriplets(arr, 1));
