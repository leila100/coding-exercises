/*
Two strings are anagrams of each other if the letters of one string can be rearranged 
to form the other string. 
Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example s=mom, the list of all anagrammatic pairs is [m,m], [mo.om] at positions [[0, 2], [[0,1], [1,2]]] respectively.

Function Description

Complete the function sherlockAndAnagrams in the editor below. 
It must return an integer that represents the number of anagrammatic pairs of substrings in s.

sherlockAndAnagrams has the following parameter(s):
s: a string .
*/

function sherlockAndAnagrams(s) {
  // build dict of all the combinations
  var combinations = {};
  var count = 0;
  for (let i = 0; i < s.length; i++) {
    let idx = i;
    while (idx < s.length) {
      let comb = s.slice(i, idx + 1);
      let co = comb
        .split("")
        .sort()
        .join("");
      idx++;
      if (co in combinations) {
        count += combinations[co];
        combinations[co]++;
      } else combinations[co] = 1;
    }
  }
  return count;
}

console.log(sherlockAndAnagrams("mom"));
console.log(sherlockAndAnagrams("abba"));
console.log(sherlockAndAnagrams("ifailuhkqq"));
console.log(sherlockAndAnagrams("kkkk"));
