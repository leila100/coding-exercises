/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), 
find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Example 2:
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/

var combinationSum = function(candidates, target) {
  const solution = [];
  const stack = [];
  const used = new Set();
  for (num of candidates) {
    if (num === target) {
      if (!used.has(`${num}`)) {
        used.add(`${num}`);
        solution.push([num]);
      }
    } else if (num < target) stack.push({ sum: num, sol: [num] });
  }
  while (stack.length > 0) {
    const top = stack.pop();
    for (num of candidates) {
      const val = top.sum + num;
      if (val === target) {
        const s = [...top.sol, num].sort().join("");
        if (!used.has(s)) {
          used.add(s);
          solution.push([...top.sol, num]);
        }
      } else if (val < target) stack.push({ sum: val, sol: [...top.sol, num] });
    }
  }
  return solution;
};

// const candidates = [2, 3, 6, 7];
// console.log(combinationSum(candidates, 7));
// const candidates2 = [2, 3, 5];
// console.log(combinationSum(candidates2, 8));
const candidates2 = [8, 7, 4, 3];
console.log(combinationSum(candidates2, 11));
