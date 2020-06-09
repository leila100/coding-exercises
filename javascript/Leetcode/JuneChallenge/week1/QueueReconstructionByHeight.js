/*
Suppose you have a random list of people standing in a queue. 
Each person is described by a pair of integers (h, k), 
where h is the height of the person and k is the number of people 
in front of this person who have a height greater than or equal to h. 
Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

 
Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */

/*
1- Arrange all the person based on the heights sorted in decreasing order and 
if two or more person has same heights then compare their K values in ascending order.
2- Insert one by one based on K value in the queue
*/

var reconstructQueue = function (people) {
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  const result = [];
  people.forEach((person) => result.splice(person[1], 0, person));
  return result;
};

const people = [
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
];

// const people = [
//   [9, 0],
//   [7, 0],
//   [1, 9],
//   [3, 0],
//   [2, 7],
//   [5, 3],
//   [6, 0],
//   [3, 4],
//   [6, 2],
//   [5, 2],
// ];
console.log(reconstructQueue(people));
