/*
You are given a square map as a matrix of integer strings. 
Each cell of the map has a value denoting its depth. 
We will call a cell of the map a cavity if and only if 
- this cell is not on the border of the map 
- each cell adjacent to it has strictly smaller depth. 
Two cells are adjacent if they have a common side, or edge.

Find all the cavities on the map and replace their depths with the uppercase character X.
For example, given a matrix:
989
191
111
You should return:
989
1X1
111
The center cell was deeper than those on its edges: [8,1,1,1]. 
The deep cells in the top two corners don't share an edge with the center cell.
*/

function cavityMap(grid) {
  // go through each num inside the matrix (not the one in the edge)
  // get its edges
  // if their are four of them, check if they are all lower than num
  // if they are, num = X
  for (let i = 1; i < grid.length - 1; i++) {
    //go through each row
    for (let j = 1; j < grid[0].length - 1; j++) {
      // go through each column
      const cell = grid[i][j];
      const left_edge = grid[i][j - 1];
      const right_edge = grid[i][j + 1];
      const top_edge = grid[i - 1][j];
      const bottom_edge = grid[i + 1][j];
      if (left_edge < cell && right_edge < cell && top_edge < cell && bottom_edge < cell) {
        // modify the string in i to have an X in cell's spot
        const str = grid[i].split("");
        str[j] = "X";
        grid[i] = str.join("");
      }
    }
  }
  console.log(grid);
  return grid;
}

cavityMap(["989", "191", "111"]);
