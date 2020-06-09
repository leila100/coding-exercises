/*
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/*
Use left and right index
reverse the values in each index until they meet
*/

var reverseString = function (s) {
  let rightIndex = 0;
  let leftIndex = s.length - 1;
  while (rightIndex < s.length && leftIndex >= 0 && leftIndex > rightIndex) {
    const temp = s[rightIndex];
    s[rightIndex] = s[leftIndex];
    s[leftIndex] = temp;
    rightIndex++;
    leftIndex--;
  }
};

// faster version
// var reverseString = function (s) {
//   for (i = 0; i < s.length / 2; i++) {
//     [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
//   }
// };

// const s = ["h", "e", "l", "l", "o"];
const s = ["H", "a", "n", "n", "a", "h"];
reverseString(s);
console.log(s);
