/*
Given a set of distinct integers, print the size of a maximal subset of s where the sum of any 2 numbers in s is 
not evenly divisible by k.

For example, the array s = [19, 10, 12, 24, 25, 22] and k=4. 
One of the arrays that can be created is [10, 12, 25]. Another is [19, 22, 24]. 
After testing all permutations, the maximum length solution array has 3 elements.

Function Description
Complete the nonDivisibleSubset function in the editor below. 
It should return an integer representing the length of the longest subset of s meeting the criteria.

nonDivisibleSubset has the following parameter(s):

S: an array of integers
k: an integer
*/

function nonDivisibleSubset(k, s) {
  var count = 0;
  // build a dict where keys are s[i]%k and values are s[i]
  const mods = {};
  for (let num of s) {
    const mod = num % k;
    if (mod in mods) mods[mod].push(num);
    else mods[mod] = [num];
  }
  // for each key, add to count the max between k and k-key
  // if k and k-key are equal, just take 1
  const visited = new Set();
  const keys = Object.keys(mods);
  for (let key of keys) {
    key = parseFloat(key);
    const other = k - key;
    if (visited.has(key) || visited.has(other)) continue;
    if (other === key || key === 0) count++;
    else {
      if (!(other in mods)) mods[other] = [];
      const maxNum = Math.max(mods[key].length, mods[other].length);
      count += maxNum;
    }
    visited.add(other);
    visited.add(key);
  }
  return count;
}

// const s = [19, 10, 12, 24, 25, 22];
// console.log(nonDivisibleSubset(4, s));
const s = [1, 7, 2, 4];
console.log(nonDivisibleSubset(3, s));
