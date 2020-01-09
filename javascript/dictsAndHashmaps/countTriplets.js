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
  const arrDict = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] in arrDict) arrDict[arr[i]].push(i);
    else arrDict[arr[i]] = [i];
  }
  console.log(arrDict);
  var count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    // how many arr[i]*r are there after i
    const second = arr[i] * r;
    console.log("second: ", second);
    if (!(second in arrDict)) continue;
    const secondIndex = arrDict[second].filter(index => index > i);
    // how many second*r are there after i
    const third = second * r;
    console.log("third: ", third);
    if (!(third in arrDict)) continue;
    secondIndex.forEach(idx => {
      count += arrDict[third].filter(index => index > idx).length;
    });
  }

  return count;
}

// const arr = [1, 4, 16, 64];
// console.log(countTriplets(arr, 4));
const arr = [1, 2, 2, 4];
console.log(countTriplets(arr, 2));
// const arr = [1, 1, 1];
// console.log(countTriplets(arr, 1));
