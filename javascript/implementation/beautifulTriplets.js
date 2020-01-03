/*
Given a sequence of integers a, a triplet (a[i], a[j], a[k]) is beautiful if:
- i < j < k
- a[j] - a[i] = a[k] - a[j] = d

Given an increasing sequence of integers and the value of d, count the number of beautiful triplets in the sequence.

For example, the sequence [2, 2, 3, 4, 5] and d=1 . 
There are three beautiful triplets, by index: [i, j, k] = [0, 2, 3], [1, 2, 3], [2, 3, 4]. 
To test the first triplet, arr[j] - arr[i] = 3 - 2 = 1 and arr[k] - arr[j] = 4 - 3 = 1.

Function Description
Complete the beautifulTriplets function in the editor below. 
It must return an integer that represents the number of beautiful triplets in the sequence.

beautifulTriplets has the following parameters:
d: an integer
arr: an array of integers, sorted ascending
*/

function beautifulTriplets(d, arr) {
  var count = 0;
  var arrSet = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    var jVal = arr[i] + d;
    var kval = arr[i] + d * 2;
    if (arrSet.has(jVal) && arrSet.has(kval)) count++;
  }
  return count;
}

const arr = [2, 2, 3, 4, 5];
console.log(beautifulTriplets(1, arr));
