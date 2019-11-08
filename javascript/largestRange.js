/*
Write a function that takes an array of integers and returns an array of length 2 representing the largest range numbers
contained in that array.
for example:
[1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6] return [0, 7] (for [0, 1, 2, 3, 4, 5, 6, 7])
*/

function largestRange(array) {
  const visited = {};
  for (let i = 0; i < array.length; i++) {
    visited[array[i]] = false;
  }
  let answer = [];
  let max_range = 0;
  for (let i = 0; i < array.length; i++) {
    if (visited[array[i]]) continue;
    visited[array[i]] = true;
    let lower = array[i];
    let j = array[i] - 1;
    while (j in visited && !visited[j]) {
      visited[j] = true;
      lower = j;
      j--;
    }
    let higher = array[i];
    let k = array[i] + 1;
    while (k in visited && !visited[k]) {
      visited[k] = true;
      higher = k;
      k++;
    }
    if (higher - lower > max_range) {
      max_range = higher - lower;
      answer = [lower, higher];
    }
  }
  if (max_range === 0) answer = [array[0], array[0]]; // if longest range is 1
  return answer;
}

// const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
const array = [1, 5, 8, 10];
console.log(largestRange(array));
