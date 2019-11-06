/*
Starting with a 1-indexed array of zeros and a list of operations,
 for each operation add a value to each of the array element between two given indices, inclusive. 
 Once all operations have been performed, return the maximum value in your array.
*/

function arrayManipulation(n, queries) {
  // build object with keys are used indexes and value are the sum so far for that index
  // keep track of max after each addition
  //   const sums = {};
  //   let max_sum = 0;
  //   for (let i = 0; i < queries.length; i++) {
  //     for (let j = queries[i][0]; j <= queries[i][1]; j++) {
  //       if (!(j in sums)) sums[j] = queries[i][2];
  //       else sums[j] += queries[i][2];
  //       if (sums[j] > max_sum) max_sum = sums[j];
  //     }
  //   }
  //   console.log(sums);
  //   return max_sum;

  /*
  Instead of storing the actual values in the array, you store the difference between the current element and the previous element. 
  So you add sum to a[p] showing that a[p] is greater than its previous element by sum. 
  You subtract sum from a[q+1] to show that a[q+1] is less than a[q] by sum 
  (since a[q] was the last element that was added to sum). 
  By the end of all this, you have an array that shows the difference between every successive element. 
  By adding all the differences, you get the value of the maximum element
  */
  const arr = [];
  for (let i = 0; i < n; i++) arr.push(0);
  for (let i = 0; i < queries.length; i++) {
    const p = queries[i][0];
    const q = queries[i][1];
    const incr = queries[i][2];
    arr[p - 1] += incr;
    if (q <= arr.length) arr[q] -= incr;
    console.log(arr);
  }
  let max_num = 0;
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x += arr[i];
    if (max_num < x) max_num = x;
  }
  return max_num;

  /* in es6
    let arr = new Array(2*n).fill(0); 
    let max = 0;

    queries.forEach((item) => {
        arr[item[0]] += item[2];
        arr[item[1] + 1] -= item[2];
    });

    arr.reduce((prev, curr, idx) => {
        const sum = prev + curr;
        if (sum > max) {
            max = sum;
        }

        return sum;
    })

    return max;
*/
}

const queries = [[1, 5, 3], [4, 8, 7], [8, 9, 11]];
// const queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]];
console.log(arrayManipulation(10, queries));
