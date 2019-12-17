/*
A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if an opening bracket (i.e., (, [, or {) occurs 
to the left of a closing bracket (i.e., ), ], or }) of the exact same type. 

There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. 
For example, {[(])} is not balanced because the contents in between { and } are not balanced. 
The pair of square brackets encloses a single, unbalanced opening bracket, (, 
and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is balanced if the following conditions are met:
- It contains no unmatched brackets.
- The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

Given n strings of brackets, determine whether each sequence of brackets is balanced. 
If a string is balanced, return YES. Otherwise, return NO.

Function Description

Complete the function isBalanced in the editor below. 
It must return a string: YES if the sequence is balanced or NO if it is not.

isBalanced has the following parameter(s):
s: a string of brackets
*/

function isBalanced(s) {
  // store each opening bracket in stack
  // if closing bracket is found, pop from stack
  // if match, continue
  // else return NO
  // return YES
  if (s.length % 2 == 1) return "NO";
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      stack.push(s[i]);
    } else {
      const bracket = stack.pop();
      if ((s[i] == "}" && bracket != "{") || (s[i] == "]" && bracket != "[") || (s[i] == ")" && bracket != "("))
        return "NO";
    }
  }
  // if there are leftover brackets that have not been matched return NO
  if (stack.length != 0) return "NO";
  return "YES";
}

// s = "{[()]}";
// s = "{[(])}";
s = "{{{{[[(())]]}}";
console.log(isBalanced(s));
