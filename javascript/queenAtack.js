/*
You will be given a square chess board with one queen and a number of obstacles placed on it. 
Determine how many squares the queen can attack.

A queen is standing on an nxn chessboard. The chess board's rows are numbered from 1 to n, 
going from bottom to top. Its columns are numbered from 1 to n, going from left to right. 
Each square is referenced by a tuple, (r, c), describing the row, r, and column, c, where the square is located.

The queen is standing at position (rq, cq). 
In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals). 

Given the queen's position and the locations of all the obstacles, 
find and print the number of squares the queen can attack from her position at (rq, cq). 
*/

function queensAttack(n, k, r_q, c_q, obstacles) {
  // Check if obstacles is in the top direction
  // If none, add all the cell from queen to top
  // else, add only the cell from closest obstacle to queen
  // do same for the other directions

  // build object of obstacles, grouping them by direction
  const obs = {};
  for (let i = 0; i < obstacles.length; i++) {
    const o = obstacles[i];
    const [r_o, c_o] = o;
    console.log(`obstacle: ${r_o} ${c_o}`);
    if (r_o == r_q) {
      // if same row as queen
      if (c_o > c_q) {
        if (obs["right"]) obs["right"].push(o);
        else obs["right"] = [o];
      } else {
        if (obs["left"]) obs["left"].push(o);
        else obs["left"] = [o];
      }
    } else if (c_o == c_q) {
      //same column as queen
      if (r_o > r_q) {
        if (obs["top"]) obs["top"].push(o);
        else obs["top"] = [o];
      } else {
        console.log(`there's an obstacle down: ${o}`);
        if (obs["down"]) obs["down"].push(o);
        else obs["down"] = [o];
      }
    } else if (r_o - r_q == c_o - c_q) {
      // if in diagonal
      if (r_o - r_q > 0) {
        // if top right diagonal
        console.log("**** ", obs["trd"], o);
        if (obs["trd"]) obs["trd"].push(o);
        else obs["trd"] = [o];
      } else {
        // down left diagonal
        if (obs["dld"]) obs["dld"].push(o);
        else obs["dld"] = [o];
      }
    } else if (r_o - r_q == -(c_o - c_q)) {
      if (r_o - r_q > 0) {
        // if top left diagonal
        if (obs["tld"]) obs["tld"].push(o);
        else obs["tld"] = [o];
      } else {
        // down right diagonal
        if (obs["drd"]) obs["drd"].push(o);
        else obs["drd"] = [o];
      }
    }
  }
  for (let o in obs) console.log(`obs[${o}]: ${obs[o]}`);
  // count the cells accessible for each direction
  let count = 0;
  // up
  if (obs["top"]) {
    const cells = obs["top"];
    cells.sort((a, b) => a[0] - b[0]); // sort by closer raw to queen
    const closer = cells[0];
    count += closer[0] - r_q - 1; // count all cells between closer and queen
  } else count += n - r_q;
  console.log(`count after top: ${count}`);

  //down
  if (obs["down"]) {
    const cells = obs["down"];
    cells.sort((a, b) => b[0] - a[0]); // sort by closer raw to queen
    const closer = cells[0];
    count += r_q - closer[0] - 1; // count all cells between closer and queen
  } else count += r_q - 1;
  console.log(`count after down: ${count}`);

  // right
  if (obs["right"]) {
    const cells = obs["right"];
    cells.sort((a, b) => a[1] - b[1]); // sort by closer raw to queen
    const closer = cells[0];
    count += closer[1] - c_q - 1; // count all cells between closer and queen
  } else count += n - c_q;
  console.log(`count after right: ${count}`);

  // left
  if (obs["left"]) {
    const cells = obs["left"];
    cells.sort((a, b) => b[1] - a[1]); // sort by closer raw to queen
    const closer = cells[0];
    count += c_q - closer[1] - 1; // count all cells between closer and queen
  } else count += c_q - 1;
  console.log(`count after left: ${count}`);

  // trd
  if (obs["trd"]) {
    const cells = obs["trd"];
    cells.sort((a, b) => a[0] - b[0]); // sort by closer raw to queen
    const closer = cells[0];
    count += closer[0] - r_q - 1; // count all cells between closer and queen
  } else {
    if (r_q == n || c_q == n) count += 0;
    else count += n - c_q < n - r_q - 1 ? n - c_q : n - r_q;
  }
  console.log(`count after trd: ${count}`);

  // dld
  if (obs["dld"]) {
    const cells = obs["dld"];
    cells.sort((a, b) => b[0] - a[0]); // sort by closer raw to queen
    const closer = cells[0];
    count += c_q - closer[1] - 1; // count all cells between closer and queen
  } else {
    if (r_q == 1 || c_q == 1) count += 0;
    else count += c_q - 1 < r_q - 1 ? c_q - 1 : r_q - 1;
  }
  console.log(`count after dld: ${count}`);

  // tld
  if (obs["tld"]) {
    const cells = obs["tld"];
    cells.sort((a, b) => a[0] - b[0]); // sort by closer raw to queen
    const closer = cells[0];
    count += closer[0] - r_q - 1; // count all cells between closer and queen
  } else {
    if (r_q == n || c_q == 1) count += 0;
    else count += n - r_q < c_q - 1 ? n - r_q : c_q - 1;
  }
  console.log(`count after tld: ${count}`);

  // drd
  if (obs["drd"]) {
    const cells = obs["drd"];
    cells.sort((a, b) => b[0] - a[0]); // sort by closer raw to queen
    const closer = cells[0];
    count += r_q - closer[0] - 1; // count all cells between closer and queen
  } else {
    if (r_q == 1 || c_q == n) count += 0;
    else count += r_q - 1 < n - c_q ? r_q - 1 : n - c_q;
  }
  console.log(`count after drd: ${count}`);

  return count;
}

// console.log(queensAttack(4, 0, 4, 4, []));
// const obstacles = [
//   [5, 5],
//   [4, 2],
//   [2, 3]
// ];
// console.log(queensAttack(5, 3, 4, 3, obstacles));
// console.log(queensAttack(1, 0, 1, 1, []));
// const obstacles = [[3, 5]];
// console.log(queensAttack(8, 1, 4, 4, obstacles));
const obstacles = [
  [4, 4],
  [5, 5]
];
console.log(queensAttack(5, 2, 3, 3, obstacles));
