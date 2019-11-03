/*
Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.
For example, if the string s='abcac' and n=10, the substring we consider is abcacabcac, the first 10 characters of her infinite string. 
There are 4 occurrences of a in the substring.
*/

function repeatedString(s, n) {
  const a_num = (s.match(/a/g) || []).length;
  const m = Math.floor(n / s.length);
  const rest = n % s.length;
  let result = m * a_num + (s.substring(0, rest).match(/a/g) || []).length;
  return result;
}

console.log(repeatedString("abcac", 4));
console.log(repeatedString("abcac", 10));
console.log(repeatedString("abcac", 11));
