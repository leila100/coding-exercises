/*
ou are given a string s that consists of lower case English letters and brackets. 

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 

Example 1:

Input: s = "(abcd)"
Output: "dcba"
Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
Example 4:

Input: s = "a(bcdefghijkl(mno)p)q"
Output: "apmnolkjihgfedcbq"
*/

var reverseParentheses = function (s) {
  let index = 0;
  function getValue(str) {
    let re = "";
    if (str[index] == "(") {
      index++;
      re = getString(str).split("").reverse().join("");
    } else {
      re = getString(str);
    }
    return re;
  }

  function getString(str) {
    let re = "";
    while (index < str.length) {
      if (str[index] == ")") {
        index++;
        break;
      }
      if (str[index] == "(") {
        re += getValue(str);
      } else {
        re += str[index++];
      }
    }
    return re;
  }
  let re = "";
  while (index < s.length) {
    re += getValue(s);
  }
  return re;
};

/*
Python using stack
*/

/*
def reverseParentheses(self, s: str) -> str:
      if not s: return s

      # stack of open parenthesis
      stack = []
      r = 0
      s = [c for c in s]
      while r < len(s):
        if s[r] == '(': 
          stack.append(r)
        elif s[r] == ')':
          l = stack.pop()
          a, b = l+1, r-1
          while a < b: 
            s[a], s[b] = s[b], s[a] # reverse
            a, b = a+1, b-1
        r += 1
      parens = set([')', '('])   
      return ''.join([c for c in s if c not in parens])
*/
