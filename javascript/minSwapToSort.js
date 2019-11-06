/*
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. 
You are allowed to swap any two elements. 
You need to find the minimum number of swaps required to sort the array in ascending order.
*/

/*
Done by visualizing the problem as a graph. 
We will have n nodes and an edge directed from node i to node j if the element at i’th index 
must be present at j’th index in the sorted array.
*/
function minimumSwaps(arr) {
  let swap = 0;
  let visited = [];
  for (let i = 0; i < arr.length; i++) {
    j = i;
    cycle = 0;
    while (!visited[j]) {
      visited[j] = true; // keep track of visited nodes to know when a cycle is closed
      j = arr[j] - 1; // get the next node in the cycle
      cycle++;
    }
    if (cycle !== 0) {
      swap += cycle - 1;
    }
  }
  return swap;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
