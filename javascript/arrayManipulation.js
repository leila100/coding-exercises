/*
Starting with a 1-indexed array of zeros and a list of operations,
 for each operation add a value to each of the array element between two given indices, inclusive. 
 Once all operations have been performed, return the maximum value in your array.
*/

function arrayManipulation(n, queries) {
  // build object with keys are used indexes and value are the sum so far for that index
  // keep track of max after each addition
  const sums = {};
  let max_sum = 0;
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (!(j in sums)) sums[j] = queries[i][2];
      else sums[j] += queries[i][2];
      if (sums[j] > max_sum) max_sum = sums[j];
    }
  }
  console.log(sums);
  return max_sum;
}

// const queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]];
const queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]];
console.log(arrayManipulation(10, queries));
