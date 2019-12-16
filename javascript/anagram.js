/*
Alice is taking a cryptography class and finding anagrams to be very useful. 
We consider two strings to be anagrams of each other if the first string's letters can be rearranged 
to form the second string. In other words, both strings must contain the same exact letters in the same 
exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent on 
the minimum number of character deletions required to make the two strings anagrams. 
Can you help her find this number?

Given two strings, a and b, that may or may not be of the same length, determine the minimum number 
of character deletions required to make a and b anagrams. 
Any characters can be deleted from either of the strings.

For example, if a=cde and b=cdf, we can delete e from string a and f from string b so that both remaining strings 
are cd and dc which are anagrams.
*/

function minCharDel(s1, s2) {
  // build obj for first string, where keys are each char, and values are the number of that char in the string
  // Go through second string, if char is found in object, and the value is > 0, reduce one from value
  // if value is 0, all chars copies have been found in str2, it's then a char that need to be removed
  // once str2 is all done, be sure to add the chars in str1 that are not in str2

  const obj1 = {};
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (char in obj1) obj1[char] += 1;
    else obj1[char] = 1;
  }

  let count = 0;
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    console.log(`checking char: ${char}`);
    if (char in obj1) {
      if (obj1[char] == 0) {
        delete obj1[char];
        count += 1;
      } else obj1[char] -= 1;
    } else count += 1;
  }
  console.log(obj1);
  const keys = Object.keys(obj1);
  for (let i = 0; i < keys.length; i++) {
    if (obj1[keys[i]] > 0) count += obj1[keys[i]];
  }
  return count;
}

// str1 = "cde";
// str2 = "dcf";
// str2 = "abc";
str1 = "fcrxzwscanmligyxyvym";
str2 = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";
const count = minCharDel(str1, str2);
console.log(`result: ${count}`);
