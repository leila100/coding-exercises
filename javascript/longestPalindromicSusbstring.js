/*
Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
*/

function isPalindrome(s) {
  const reverse = s
    .split("")
    .reverse()
    .join("");
  return s === reverse;
}

var longestPalindrome = function(s) {
  let maxStr = s[0];

  // build dict with all chars indexes
  if (s.length <= 1) return s;
  const chars = {};
  const lengths = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in chars) {
      for (let j = 0; j < chars[s[i]].length; j++) {
        if (i - chars[s[i]][j] + 1 > maxStr.length) {
          const slice = s.slice(chars[s[i]][j], i + 1);
          if (isPalindrome(slice)) maxStr = slice;
        }
      }
      chars[s[i]].push(i);
    } else chars[s[i]] = [i];
  }
  //   console.log(chars);
  //   console.log(lengths);
  //   const subs = Object.keys(lengths).sort((a, b) => b - a);
  //   console.log(subs);
  //   if (subs.length === 0) return s[0];
  //   for (length of subs) {
  //     for (pair of lengths[length]) {
  //       console.log(length, pair);
  //       const subStr = s.slice(pair[0], pair[1] + 1);
  //       const reverse = subStr
  //         .split("")
  //         .reverse()
  //         .join("");
  //       console.log(subStr, reverse);
  //       if (subStr === reverse) return subStr;
  //     }
  //   }
  //   for (char of s) {
  //     if (chars[char].length > 1) {
  //       const indexes = chars[char];
  //       for (let i = 0; i < indexes.length - 1; i++) {
  //         for (j = i + 1; j < indexes.length; j++) {
  //           //   console.log(i, j);
  //           if (indexes[j] - indexes[i] + 1 <= maxStr.length) continue;
  //           const subStr = s.slice(indexes[i], indexes[j] + 1);
  //           const reverse = subStr
  //             .split("")
  //             .reverse()
  //             .join("");
  //           //   console.log(subStr, reverse);
  //           if (subStr === reverse) maxStr = subStr;
  //         }
  //       }
  //     }
  //   }
  return maxStr;
};

console.log(longestPalindrome("babadb"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("abcda"));
