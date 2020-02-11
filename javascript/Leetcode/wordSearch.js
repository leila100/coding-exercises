/*
Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

Example:
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

function findChar(board, char) {
  const cells = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === char) cells.push([[i, j]]);
    }
  }
  return cells;
}

function getNeighbors(board, cell) {
  const neighbors = [];
  const x = cell[0];
  const y = cell[1];
  if (x + 1 < board.length) neighbors.push([x + 1, y]);
  if (x - 1 >= 0) neighbors.push([x - 1, y]);
  if (y + 1 < board[0].length) neighbors.push([x, y + 1]);
  if (y - 1 >= 0) neighbors.push([x, y - 1]);
  return neighbors;
}

var exist = function(board, word) {
  const stack = findChar(board, word[0]);
  if (word.length === 1 && stack.length > 0) return true;
  let idx = 1;
  let visited = [];
  while (stack.length > 0) {
    const path = stack.pop();
    visited = path.map(cell => `${cell[0]},${cell[1]}`);
    idx = path.length;
    const cell = path[path.length - 1];
    let str = `${cell[0]},${cell[1]}`;
    const neighbors = getNeighbors(board, cell);
    for (let n of neighbors) {
      str = `${n[0]},${n[1]}`;
      if (board[n[0]][n[1]] === word[idx] && !visited.includes(str)) {
        if (idx === word.length - 1) return true;
        const newCell = [...path, n];
        stack.push(newCell);
      }
    }
  }
  return false;
};
// const board = [
//   ["A", "B"],
//   ["C", "D"]
// ];
// console.log(exist(board, "ABA"));

board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
];
console.log(exist(board, "ABCCED"));
console.log(exist(board, "SEE"));
console.log(exist(board, "ABCB"));
console.log(exist(board, "BCESCFA"));

// const board = [
//   ["A", "B", "C", "E"],
//   ["S", "F", "E", "S"],
//   ["A", "D", "E", "E"]
// ];
// console.log(exist(board, "ABCESEEEFS"));

// const board = [["A", "A"]];
// console.log(exist(board, "AAA"));
