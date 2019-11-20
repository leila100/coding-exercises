/*
You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the 
shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, 
cut that length from each of the longer sticks and then discard all the pieces of that shortest length. 
When all the remaining sticks are the same length, they cannot be shortened so discard them.

Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left.

For example, there are n=3 sticks of lengths arr=[1, 2, 3]. 
The shortest stick length is 1, so we cut that length from the longer two and discard the pieces of length 1. 
Now our lengths are arr=[1, 2]. 
Again, the shortest stick is of length 1, so we cut that amount from the longer stick and discard those pieces. 
There is only one stick left, arr=[1], so we discard that stick. 
Our lengths are answer=[3, 2, 1].

Function Description

Complete the cutTheSticks function in the editor below. 
It should return an array of integers representing the number of sticks before each cut operation is performed.

cutTheSticks has the following parameter(s):
arr: an array of integers representing the length of each stick
*/

function cutTheSticks(arr) {
  const answer = [];
  while (arr.length > 0) {
    answer.push(arr.length);
    const minNum = Math.min(...arr);
    while (arr.indexOf(minNum) !== -1) {
      const index = arr.indexOf(minNum);
      arr.splice(index, 1);
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] -= minNum;
    }
  }
  return answer;
}

// const arr = [5, 4, 4, 2, 2, 8];
const arr = [5, 5, -5];
console.log(cutTheSticks(arr)); // [6, 4, 2, 1]
