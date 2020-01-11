/*
A string is said to be a special string if either of two conditions is met:
All of the characters are the same, e.g. aaa.
All characters except the middle one are the same, e.g. aadaa.

A special substring is any substring of a string which meets one of those criteria. 
Given a string, determine how many special substrings can be formed from it.

For example, given the string s=mnonopoo, we have the following special substrings: 
{m, n, o, n, o, p, o, o, non, ono, opo, oo}.

Function Description
Complete the substrCount function in the editor below. 
It should return an integer representing the number of special substrings that can be 
formed from the given string.

substrCount has the following parameter(s):
n: an integer, the length of string s
s: a string
*/

function substrCount(n, s) {
  // keep track of number of same chars in array
  const groups = [];
  let cur = null;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === cur) count++;
    else {
      if (cur !== null) groups.push([cur, count]);
      cur = s[i];
      count = 1;
    }
  }
  groups.push([cur, count]);

  // for each group, add to answer the number of possible permutations
  let answer = 0;
  for (let group of groups) {
    answer += Math.floor((group[1] * (group[1] + 1)) / 2);
  }

  // Determine the strings that meet second condition
  for (let i = 1; i < groups.length - 1; i++) {
    if (groups[i - 1][0] === groups[i + 1][0] && groups[i][1] === 1) {
      const min = Math.min(groups[i - 1][1], groups[i + 1][1]);
      answer += min;
    }
  }
  return answer;
}

const s = "mnonopoo";
console.log(substrCount(8, s));
const s1 = "asasd";
console.log(substrCount(5, s1));
const s2 = "abcbaba";
console.log(substrCount(7, s2));
const s3 = "aaaa";
console.log(substrCount(4, s3));
