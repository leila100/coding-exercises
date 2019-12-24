/*
In this challenge you need to print the string that accompanies each integer in a list sorted by the integers. 
If two strings are associated with the same integer, they must be printed in their original order so your sorting 
algorithm should be stable. 
There is one other twist. The first half of the strings encountered in the inputs are to be replaced with the character "-".

Insertion Sort and the simple version of Quicksort are stable, 
but the faster in-place version of Quicksort is not since it scrambles around elements while sorting.

In this challenge, you will use counting sort to sort a list while keeping the order of the strings preserved.

For example, if your inputs are [[0, a], [1, b], [0, c], [1, d]] you could set up a helper array with three empty arrays as elements. 
The following shows the insertions:

i	string	converted	list
0				[[],[],[]]
1 	a 	-		[[-],[],[]]
2	b	-		[[-],[-],[]]
3	c			[[-,c],[-],[]]
4	d			[[-,c],[-,d],[]]
The result is then printed: -c-d .

Function Description

Complete the countSort function in the editor below. It should construct and print out the sorted strings.

countSort has the following parameter(s):
arr: a 2D array where each arr[i] is comprised of two strings: x and s.
Note: The first element of each arr[i], x, must be cast as an integer to perform the sort.
*/

function countSort(arr) {
  // build object with keys are first elements and values are arrays of all the corresponding second elements
  // for half of arr, store values as '-'
  // get all keys from object, and sort them
  // display values based on sorted keys
  const half = Math.floor(arr.length / 2);
  var arrPairs = {};
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i][1];
    let key = parseInt(arr[i][0]);
    if (i < half) value = "-";
    if (key in arrPairs) {
      arrPairs[key].push(value);
    } else {
      arrPairs[key] = [value];
    }
  }
  var keys = Object.keys(arrPairs);
  keys.sort((a, b) => a - b);
  var answer = "";
  for (let i = 0; i < keys.length; i++) {
    answer += arrPairs[keys[i]].join(" ");
    answer += " ";
  }
  return answer;
}

// var arr = [
//   [0, "a"],
//   [1, "b"],
//   [0, "c"],
//   [1, "d"]
// ];
const arr = [
  [0, "ab"],
  [6, "cd"],
  [0, "ef"],
  [6, "gh"],
  [4, "ij"],
  [0, "ab"],
  [6, "cd"],
  [0, "ef"],
  [6, "gh"],
  [0, "ij"],
  [4, "that"],
  [3, "be"],
  [0, "to"],
  [1, "be"],
  [5, "question"],
  [1, "or"],
  [2, "not"],
  [4, "is"],
  [2, "to"],
  [4, "the"]
];
console.log(countSort(arr));
