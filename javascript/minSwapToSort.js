/*
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. 
You are allowed to swap any two elements. 
You need to find the minimum number of swaps required to sort the array in ascending order.
*/

function minimumSwaps(arr) {
  let swap = 0;
  let visited = [];
  for (let i = 0; i < arr.length; i++) {
    j = i;
    cycle = 0;
    while (!visited[j]) {
      visited[j] = true;
      j = arr[j] - 1;
      cycle++;
    }
    if (cycle !== 0) {
      swap += cycle - 1;
    }
  }
  return swap;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
