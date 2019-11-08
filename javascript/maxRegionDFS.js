/*
Consider a matrix where each cell contains either a 1 or a 0 and any cell containing a 1 is called a filled cell. 
Two cells are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally. 
If one or more filled cells are also connected, they form a region. 
Note that each cell in a region is connected to at least one other cell in the region but 
is not necessarily directly connected to all the other cells in the region.
Given an n X m matrix, find and print the number of cells in the largest region in the matrix.
*/

function getRegion(grid, x, y, visited) {
  let count = 0;
  const stack = [];
  const cellStr = [x, y].join("");
  if (visited.has(cellStr)) return 0;
  visited.add(cellStr);
  stack.push(cellStr);
  while (stack.length > 0) {
    count += 1;
    const cell = stack.pop();
    const coordinates = cell.split("");
    const i = parseInt(coordinates[0]);
    const j = parseInt(coordinates[1]);
    if (j - 1 >= 0 && grid[i][j - 1] === 1) {
      const str = [i, j - 1].join("");
      if (!visited.has(str)) {
        visited.add(str);
        stack.push(str);
      }
    }
    if (j + 1 < grid[0].length && grid[i][j + 1] === 1) {
      const str = [i, j + 1].join("");
      if (!visited.has(str)) {
        visited.add(str);
        stack.push(str);
      }
    }
    if (i - 1 >= 0 && grid[i - 1][j] === 1) {
      const str = [i - 1, j].join("");
      if (!visited.has(str)) {
        visited.add(str);
        stack.push(str);
      }
    }
    if (i + 1 < grid.length && grid[i + 1][j] === 1) {
      const str = [i + 1, j].join("");
      if (!visited.has(str)) {
        visited.add(str);
        stack.push(str);
      }
    }
    if (i - 1 >= 0 && j - 1 >= 0 && grid[i - 1][j - 1] === 1) {
      const str = [i - 1, j - 1].join("");
      if (!visited.has(str)) {
        visited.add(str);
        stack.push(str);
      }
    }
    if (i + 1 < grid.length && j - 1 >= 0 && grid[i + 1][j - 1] === 1) {
      const str = [i + 1, j - 1].join("");
      if (!visited.has(str)) {
        visited.add(str);
        stack.push(str);
      }
    }
    if (i - 1 >= 0 && j + 1 < grid[0].length && grid[i - 1][j + 1] === 1) {
      const str = [i - 1, j + 1].join("");
      if (!visited.has(str)) {
        visited.add(str);
        stack.push(str);
      }
    }
    if (i + 1 < grid.length && j + 1 < grid[0].length && grid[i + 1][j + 1] === 1) {
      const str = [i + 1, j + 1].join("");
      if (!visited.has(str)) {
        visited.add(str);
        stack.push(str);
      }
    }
  }
  return count;
}

function maxRegion(grid) {
  // nodes in graph are 1s
  // there's an edge between two nodes, if they are connected
  let maxCount = 0;
  const visited = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const cellValue = grid[i][j];
      if (cellValue === 1 && !visited.has([i, j].join(""))) {
        const count = getRegion(grid, i, j, visited);
        if (count > maxCount) maxCount = count;
      }
    }
  }
  return maxCount;
}

grid = [[1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 0]];
console.log(maxRegion(grid));
