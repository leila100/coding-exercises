/*
Ron and Hermione are deep in the Forbidden Forest collecting potion ingredients, 
and they've managed to lose their way. The path out of the forest is blocked, 
so they must make their way to a portkey that will transport them back to Hogwarts.

Consider the forest as an MxN grid. Each cell is either empty (represented by .) 
or blocked by a tree (represented by X). Ron and Hermione can move (together inside a single cell) 
LEFT, RIGHT, UP, and DOWN through empty cells, but they cannot travel through a tree cell. 
Their starting cell is marked with the character M, and the cell with the portkey is marked with a *. 
The upper-left corner is indexed as (0, 0).

.X.X......X
.X*.X.XXX.X
.XX.X.XM...
......XXXX.
In example above, Ron and Hermione are located at index (2, 7) and the portkey is at (1, 2). 
Each cell is indexed according to Matrix Conventions.

Hermione decides it's time to find the portkey and leave. 
They start along the path and each time they have to choose a direction, 
she waves her wand and it points to the correct direction. 
Ron is betting that she will have to wave her wand exactly k times. 
Can you determine if Ron's guesses are correct?

The map from above has been redrawn with the path indicated as a series where M is the starting point 
(no decision in this case), 1 indicates a decision point and 0 is just a step on the path:

.X.X.10000X
.X*0X0XXX0X
.XX0X0XM01.
...100XXXX.

There are three instances marked with 1 where Hermione must use her wand.

Note: It is guaranteed that there is only one path from the starting location to the portkey.

Function Description

Complete the countLuck function in the editor below. 
It should return a string, either Impressed if Ron is correct or Oops! if he is not.

countLuck has the following parameters:

matrix: a list of strings, each one represents a row of the matrix
k: an integer that represents Ron's guess
*/

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    this.queue.push(value);
  }
  dequeue() {
    if (this.size() > 0) return this.queue.shift();
    else return None;
  }
  size() {
    return this.queue.length;
  }
}

function getNeighbors(cell, matrix) {
  var neighbors = [];
  var [x, y] = cell.split(",");
  x = parseInt(x);
  y = parseInt(y);
  if (x < matrix.length - 1) {
    if (matrix[x + 1][y] == "." || matrix[x + 1][y] == "*") neighbors.push([x + 1, y].join(","));
  }
  if (y < matrix[0].length - 1) {
    if (matrix[x][y + 1] == "." || matrix[x][y + 1] == "*") neighbors.push([x, y + 1].join(","));
  }
  if (x > 0) {
    if (matrix[x - 1][y] == "." || matrix[x - 1][y] == "*") neighbors.push([x - 1, y].join(","));
  }
  if (y > 0) {
    if (matrix[x][y - 1] == "." || matrix[x][y - 1] == "*") neighbors.push([x, y - 1].join(","));
  }
  return neighbors;
}

function bfs(start, destination, matrix) {
  /*
    Return an array containing the shortest path from
    start to destination in
    breath-first order.
    */
  var queue = new Queue();
  var visited = new Set();
  queue.enqueue([start]);
  while (queue.size() > 0) {
    let path = queue.dequeue();
    let currentCell = path[path.length - 1];

    if (currentCell == destination) return path;

    if (!visited.has(currentCell)) {
      visited.add(currentCell);
      let neighbors = getNeighbors(currentCell, matrix);
      for (let neighbor of neighbors) {
        let currentPath = [...path];
        currentPath.push(neighbor);
        queue.enqueue(currentPath);
      }
    }
  }
  return [];
}

function countLuck(matrix, k) {
  // find shortest path (BFS in graph)
  // For each cell in path, if there are more than two choices, increment count
  // If final count is k, return Impressed
  // otherwise, return Oops!

  // starting cell is M, destination is *
  // Cell a is neighbor with cell b if cell a is . (or *) not a X

  // find starting cell and portkey cell
  var start = null;
  var portkey = null;
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] == "M") start = [x, y].join(",");
      if (matrix[x][y] == "*") portkey = [x, y].join(",");
    }
  }
  if (start == null || portkey == null) return "Oops!";

  // get shortest path from M to *
  var path = bfs(start, portkey, matrix);
  console.log(path);
  // go through path, if a cell in the path has more than one neighbor, increment count
  var count = 0;
  var visited = new Set();
  for (let cell of path) {
    if (cell == portkey) break;
    visited.add(cell);
    let neighbors = getNeighbors(cell, matrix).filter(cell => !visited.has(cell));

    // if (cell == start && neighbors.length > 1) count++;
    if (neighbors.length > 1) count++;
  }
  console.log(count);
  if (count == k) return "Impressed";
  else return "Oops!";
}

// const matrix = [
//   [".", "X", ".", "X", ".", ".", ".", ".", ".", ".", "X"],
//   [".", "X", "*", ".", "X", ".", "X", "X", "X", ".", "X"],
//   [".", "X", "X", ".", "X", ".", "X", "M", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", "X", "X", "X", "X", "."]
// ];
// const matrix = [
//   ["*", ".", "M"],
//   [".", "X", "."]
// ];
// const matrix = [
//   ["*", ".", "X"],
//   ["X", ".", "X"],
//   [".", ".", "M"]
// ];
const matrix2 = [
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  [".", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "."],
  ["M", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
];
const matrix = [
  [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "X", ".", "X", "X", "X", "X", "X", "X", "X", "X"],
  [".", ".", "*", ".", ".", "M", ".", "X", ".", ".", "."],
  ["X", "X", ".", "X", "X", "X", "X", "X", "X", "X", "."],
  ["X", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
];
// console.log(getNeighbors([0, 10], matrix));
console.log(countLuck(matrix2, 0));
console.log(countLuck(matrix, 10));
console.log(countLuck(matrix, 1));
