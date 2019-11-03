/*
John Watson knows of an operation called a right circular rotation on an array of integers. 
One rotation operation moves the last array element to the first position and shifts all remaining elements right one. 
To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation 
operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the value of the element at a given index.
*/

function circularArrayRotation(a, k, queries) {
  // build an object where the keys are the indexes and the values are the indexes after rotation
  // Index after rotation = (index + k) % a.length
  const indexes_after_rotation = {};
  for (let i = 0; i < a.length; i++) {
    const index_after_rotation = (i + k) % a.length;
    indexes_after_rotation[index_after_rotation] = i;
  }
  const result = [];
  for (i = 0; i < queries.length; i++) {
    console.log(a[indexes_after_rotation[queries[i]]]);
    result.push(a[indexes_after_rotation[queries[i]]]);
  }
  return result;
}

// console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));
console.log(circularArrayRotation([3, 4, 5], 3, [1, 2]));
