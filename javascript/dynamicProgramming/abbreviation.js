/*
You can perform the following operations on the string,a:
Capitalize zero or more of a's lowercase letters.
Delete all of the remaining lowercase letters in a.

Given two strings, a and b, determine if it's possible to make a equal to b as described. 
If so, print YES on a new line. Otherwise, print NO.

For example, given a=AbcDE and b=ABDE, in a we can convert b and delete c to match b. 
If a=AbcDE and b=AFDE, matching is not possible because letters may only be capitalized or discarded, not changed.

Function Description
Complete the function  in the editor below. 
It must return either YES or NO.

abbreviation has the following parameter(s):
a: the string to modify
b: the string to match
*/

function abbreviation(a, b) {
  /*
  For example, a = "aBbdD" b = "BBD" 
  since the last character in a is upper case and last character in b is also upper case and both are equal, 
  f(a,b) = f("aBbd","BB")

  Now d can never be made equal to B therefore- f("aBbd","BB") = f("aBb","BB")
  Now b can be capitalized to B,therefore we have two options - 
    either capitalize b to B - f("aBb","BB") = f("aB","B")
    or 
    don't capitalize b.  f("aB","BB") 

  if we have something like a = 'C' and b = 'D' then f(a,b) evaluates to False.
  Lastly (for initialization of the dp array)-
    if a is non-empty and b is empty, then f(a,b) is True only if all the characters in a are lower case.
    if a is empty and b is non-empty, then f(a,b) is always False.
    if both are empty then f(a,b) = True
  */
  /*
    For input a = "daBcd", b = "ABC":

             A B C
           1 0 0 0
        d  1 0 0 0
        a  1 1 0 0
        B  0 0 1 0
        c  0 0 1 1
        d  0 0 1 1
    */
  const lowerCase = new Set([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]);
  const m = a.length;
  const n = b.length;
  const dp = [];
  for (let i = 0; i < n + 1; i++) {
    const row = [];
    for (let j = 0; j < m + 1; j++) {
      row.push(false);
    }
    dp.push(row);
  }
  console.log(dp);
  dp[0][0] = true;
  for (let i = 0; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (a[j - 1] === b[i - 1]) dp[i][j] = dp[i - 1][j - 1];
      // if same chars, continue
      // if a upper char same as b char, either continue or remove a char
      else if (a[j - 1].toUpperCase() === b[i - 1]) dp[i][j] = dp[i - 1][j - 1] || dp[i][j - 1];
      // if chars are different, if a char is lowercase, just remove it
      else if (lowerCase.has(a[j - 1])) dp[i][j] = dp[i][j - 1];
    }
  }
  console.log(dp);
  if (dp[n][m] === true) return "YES";
  else return "NO";
}

let a = "AbcDE";
// let b = "ABDE";
let b = "AFDE";
// a = "KfgxzqK";
// a = "kK";
// b = "KB";
a = "daBcd";
b = "ABC";
console.log(abbreviation(a, b));
