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
  // create a dict with values as keys and indexes as values
  // go through each num in arr
  // if num*r and num*r^2 are in arrSet, add to solution triplet array
  const arrDict = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in arrDict) arrDict[arr[i]].push(i);
    else arrDict[arr[i]] = [i];
  }
  const solution = [];
  for (let i = 0; i < arr.length - 2; i++) {
    const second = arr[i] * r;
    const third = second * r;
    if (second in arrDict && third in arrDict) {
      for (let j = 0; j < arrDict[second].length; j++) {
        for (let k = 0; k < arrDict[third].length; k++) {
          if (i < arrDict[second][j] && arrDict[second][j] < arrDict[third][k])
            solution.push([i, arrDict[second][j], arrDict[third][k]]);
        }
      }
    }
  }
  return solution.length;
}

// const arr = [1, 4, 16, 64];
// console.log(countTriplets(arr, 1));
// const arr = [1, 2, 2, 4];
// console.log(countTriplets(arr, 2));
const arr = [1, 1, 1];
console.log(countTriplets(arr, 1));
