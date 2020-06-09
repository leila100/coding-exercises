/*
Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 10^4
Both strings consists only of lowercase characters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
 Go through t, keep track of all the s[0]
 for each s[0], check if all subsequent letter of s are in t
 */

var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  let currentIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[currentIndex]) {
      currentIndex++;
    }
    if (currentIndex === s.length) return true;
  }
  return false;
  /*
  using while loop and two indexes
  */
  //   let n = t.length;
  //   let m = s.length;
  //   if (m > n) {
  //     return false;
  //   }
  //   if (m === 0) {
  //     return true;
  //   }
  //   let i = 0;
  //   let j = 0;
  //   while (i < n && j < m) {
  //     if (s[j] === t[i]) {
  //       j++;
  //       if (j === m) {
  //         return true;
  //       }
  //     }
  //     i++;
  //   }
  //   return false;
};

const s1 = "abc";
const t1 = "ahabgd";

const s2 = "bb";
const t2 = "ahbgdc";

const s3 = "abc";
const t3 = "ahbabgdc";

console.log(isSubsequence(s1, t1));
console.log(isSubsequence(s2, t2));
console.log(isSubsequence(s3, t3));
