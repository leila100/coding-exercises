/*
You are given q queries. Each query is of the form two integers described below:
- 1x : Insert x in your data structure.
- 2y : Delete one occurence of y from your data structure, if present.
- 3z : Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.

The queries are given in the form of a 2-D array queries of size q where queries[i][0] contains the operation, 
and queries[i][1] contains the data element. 
For example, you are given array queries = [(1, 1), (2, 2), (3, 2), (1, 1), (1, 1), (2, 1), (3, 2)]. The results of each operation are:

Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1
Return an array with the output: [0, 1].

Function Description

Complete the freqQuery function in the editor below. 
It must return an array of integers where each element is a 1 if there is at least one element value with the 
queried number of occurrences in the current array, or 0 if there is not.

freqQuery has the following parameter(s):
queries: a 2-d array of integers
*/

function freqQuery(queries) {
  const arr = {};
  const answer = [];
  for (let i = 0; i < queries.length; i++) {
    const action = queries[i][0];
    const value = queries[i][1];
    // console.log(`action: ${action}, value: ${value}`);
    if (action == 1) {
      if (value in arr) {
        arr[value] += 1;
      } else {
        arr[value] = 1;
      }
    } else if (action == 2) {
      if (value in arr) {
        arr[value] -= 1;
        if (arr[value] == 0) delete arr[value];
      }
    } else if (action == 3) {
      found = false;
      for (let v in arr) {
        if (arr[v] == value) {
          answer.push(1);
          found = true;
          break;
        }
      }
      if (found == false) answer.push(0);
    }
  }
  return answer;
}

const queries = [
  [1, 5],
  [1, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
  [2, 5],
  [3, 2]
];
const answer = freqQuery(queries);
console.log(answer);
