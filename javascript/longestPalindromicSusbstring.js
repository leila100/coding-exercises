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
function longestPalindrome(s) {
  if (s.length <= 1) return s;
  if (s.length == 2) {
    if (s[0] === s[1]) return s;
    else return s[0];
  }
  let res = [s[0]];

  // expand from center
  // For each char in s, keep checking indexes to the left and right as long
  // as they match, add them to temp
  for (let i = 0; i < s.length - 1; i++) {
    if (i > 0 && s[i] === s[i - 1]) continue; // already checked
    let l = i - 1;
    let r = i + 1;
    let temp = [s[i]];

    while (r <= s.length - 1) {
      if (s[i] === s[r]) {
        // consider when a group of same chars are grouped together
        temp.push(s[r]);
        r++;
      } else break;
    }

    while (l >= 0 && r < s.length) {
      if (s[l] === s[r] && r > i) {
        // if same chars on each side add them to temp
        temp.unshift(s[l]);
        temp.push(s[r]);
        l--;
        r++;
      } else break;
    }
    if (temp.length > res.length) res = temp;
  }
  return res.join("");
}

console.log(longestPalindrome("babadb"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("babadada"));
console.log(longestPalindrome("babaddtattarrattatddetartrateedredividerb"));
