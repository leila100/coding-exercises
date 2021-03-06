/*
Given an array of integers where each element represents the maximum number of steps that can be 
made forward from that element, write a function to return the minimum number of jumps to reach 
the end of the array, starting from the first element. 
If an element is 0, then we cannot move through that element.

Example:

Input: [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
Output: 3   // going from 1 -> 3 -> 8 -> 9
Analyze the time and space complexity of your solution.
*/

function minJumps(arr) {
  if (arr[0] === 0 || arr.length === 0) return Infinity;
  const stack = [[0]];
  const visited = new Set();
  let minJumps = Infinity;
  while (stack.length !== 0) {
    const path = stack.pop();
    if (minJumps !== Infinity && path.length - 1 >= minJumps) continue;
    const last = path[path.length - 1];
    if (last === arr.length - 1) {
      if (minJumps === Infinity || path.length - 1 < minJumps) {
        minJumps = path.length - 1;
        console.log(`Path: ${path}`);
      }
    } else if (!visited.has(last)) {
      visited.add(last);
      const jumps = arr[last];
      for (let i = 1; i <= jumps; i++) {
        if ((minJumps !== Infinity && path.length >= minJumps) || last + i > arr.length - 1) continue;
        stack.push([...path, last + i]);
      }
    }
  }
  return minJumps;
}

/*
  Solution that utilizes dynamic programming in order to
  build up a `jumps` array from left to right such that 
  `jumps[i]` indicates the minimum number of jumps needed
  to reach that spot from `arr[0]`. At the end, return 
  `jumps[n-1]`.
*/
function minJumps2(arr, n = arr.length) {
  const jumps = new Array(n);

  if (n === 0 || arr[0] === 0) {
    return Infinity;
  }

  jumps[0] = 0;

  for (let i = 1; i < n; i++) {
    jumps[i] = Infinity;
    for (let j = 0; j < i; j++) {
      if (i <= j + arr[j] && jumps[j] !== Infinity) {
        // if i is in range
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
        break;
      }
    }
  }

  return jumps[n - 1];
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])); // should print 3
console.log(minJumps([1, 3, 6, 1, 0, 9])); // should print 3
console.log(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1])); // should print Infinity
console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5])); // should print 4
