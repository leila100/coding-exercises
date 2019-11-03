/*
You have a string of lowercase English alphabetic letters. 
You can perform two types of operations on the string:

Append a lowercase English alphabetic letter to the end of the string.
Delete the last character in the string. Performing this operation on an empty string results in an empty string.
Given an integer, k, and two strings, s and t, determine whether or not you can convert s to t by performing exactly k 
of the above operations on s. If it's possible, print Yes. Otherwise, print No.
*/

function appendAndDelete(s, t, k) {
  //   compare each letter in s to t, as soon as different, if rest of letters > k return NO
  // else, k has to be at least reminder of letters from s + reminder of letter from t
  let diff_letter_index = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      diff_letter_index = i;
      break;
    }
  }
  if (diff_letter_index === -1) {
    if (t.length - s.length === k) return "Yes";
    if ((t.length - s.length) % k === 0) return "Yes";
    if (k % (t.length - s.length) === 0 && t.length - s.length !== 1) return "Yes";
    diff_letter_index = 0;
  }
  const op_needed = s.length - diff_letter_index + (t.length - diff_letter_index);
  if (op_needed <= k) return "Yes";
  else return "No";
}

// const s = ["a", "b", "c"];
// const t = ["d", "e", "f"];
const s = "y";
const t = "yu";
console.log(appendAndDelete(s, t, 2));
