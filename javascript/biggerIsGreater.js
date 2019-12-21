/*
Lexicographical order is often known as alphabetical order when dealing with strings. 
A string is greater than another string if it comes later in a lexicographically sorted list.

Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

It must be greater than the original word
It must be the smallest word that meets the first condition

For example, given the word w=abcd, the next largest word is abdc.

Complete the function biggerIsGreater below to create and return the new string meeting the criteria. 
If it is not possible, return no answer.

Function Description

Complete the biggerIsGreater function in the editor below. 
It should return the smallest lexicographically higher string possible from the given string or no answer.

biggerIsGreater has the following parameter(s):
w: a string
*/

function findSwap(word) {
  var str = word.split("");
  var bigger1 = null;
  var bigger2 = null;
  // find the closest letter to str[0]
  for (let i = 1; i < str.length; i++) {
    if (str[i] > str[0]) {
      if (bigger1 == null) bigger1 = i;
      else {
        if (str[i] < str[bigger1]) bigger2 = i;
      }
    }
  }
  // no letters found, return the word unchanged
  if (bigger1 == null) return word;
  // swap letters
  if (bigger2 == null) [str[0], str[bigger1]] = [str[bigger1], str[0]];
  else [str[0], str[bigger2]] = [str[bigger2], str[0]];
  // sort the string without str[0]
  str = [str[0], ...str.slice(1).sort()];
  return str.join("");
}

function biggerIsGreater(w) {
  if (w.length == 1) return "no answer";
  var index = w.length - 2;
  while (index >= 0) {
    var currentStr = w.slice(index);
    var newStr = findSwap(currentStr);
    if (newStr != currentStr) return w.slice(0, index) + newStr;
    else index--;
  }
  return "no answer";
}

var w = "ab";
console.log(biggerIsGreater(w));
w = "bb";
console.log(biggerIsGreater(w));
w = "hefg";
console.log(biggerIsGreater(w));
w = "dhck";
console.log(biggerIsGreater(w));
w = "dkhc";
console.log(biggerIsGreater(w));
