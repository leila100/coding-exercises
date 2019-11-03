/*
Watson likes to challenge Sherlock's math ability. 
He will provide a starting and ending value describing a range of integers. 
Sherlock must determine the number of square integers within that range, inclusive of the endpoints.

Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25, ...

For example, the range is a=24 and b=49, inclusive. 
There are three square integers in the range: 25, 36 and 49.
*/

function squares(a, b) {
  // build a set with all the squares from 1 to 100000 (square root of 10^9)
  // for each num in range, if in set, add to result
  //   const squares = new Set();
  //   for (let i = Math.floor(Math.sqrt(a)); i <= Math.floor(Math.sqrt(b)); i++) {
  //     const square = i * i;
  //     squares.add(square);
  //   }
  //   console.log(squares);
  //   let count = 0;
  //   for (let i = a; i <= b; i++) {
  //     if (squares.has(i)) count += 1;
  //   }
  const count = Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
  return count;
}

console.log(squares(24, 49));
