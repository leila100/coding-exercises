/*
An English text needs to be encrypted using the following encryption scheme.
First, the spaces are removed from the text. Let L be the length of this text.
Then, characters are written into a grid, whose rows and columns have the following constraints:
floor(sqrt(L)) <= row <= column <= ceil(sqrt(L))
Ensure that rows x columns >= L
If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. rows x columns.
The encoded message is obtained by displaying the characters in a column, 
inserting a space, and then displaying the next column and inserting a space, and so on. 
*/

function encryption(s) {
  // remove spaces from s
  const sNoSpace = s.split(" ").join("");
  const grid = [];
  const l = sNoSpace.length;
  let grid_min = Math.floor(Math.sqrt(l));
  let grid_max = Math.ceil(Math.sqrt(l));
  let min_area = 0;
  let row = grid_min;
  let column = grid_max;
  for (let i = grid_min; i <= grid_max; i++) {
    for (let j = grid_min; j <= grid_max; j++) {
      const area = i * j;
      if ((min_area === 0 || area < min_area) && area >= l) {
        row = i;
        column = j;
        min_area = area;
      }
    }
  }
  console.log(row, column);
  let k = 0;
  for (let i = 0; i < row; i++) {
    const grid_row = [];
    for (let j = 0; j < column; j++) {
      grid_row.push(sNoSpace[k]);
      k++;
    }
    grid.push(grid_row);
  }
  // get the columns and join them into a string
  const column_strings = [];
  for (let i = 0; i < column; i++) column_strings.push("");
  let j = 0;
  while (j <= row) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][j]) column_strings[j] += grid[i][j];
    }
    j++;
  }
  const answer = column_strings.join(" ");
  return answer;
}

// console.log(encryption("if man was meant to stay on the ground god would have given us roots"));
console.log(encryption("chillout"));
