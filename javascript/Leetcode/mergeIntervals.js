/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

var merge = function(intervals) {
  const starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
  const ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);
  const solution = [];
  let i = 0;
  let j = 0;
  while (i < starts.length && j < ends.length) {
    const interval = [starts[i]];
    while (i < starts.length - 1 && j < ends.length && starts[i + 1] <= ends[j]) {
      i++;
      j++;
    }
    if (i < starts.length - 1 && j < ends.length && starts[i + 1] > ends[j]) {
      interval.push(ends[j]);
      solution.push(interval);
    }
    i++;
    j++;
    if (i === starts.length) {
      interval.push(ends[j - 1]);
      solution.push(interval);
    }
  }
  return solution;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5]
  ])
);
