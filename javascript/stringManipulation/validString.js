/*
Sherlock considers a string to be valid if all characters of the string appear the same number of times. 
It is also valid if he can remove just 1 character at 1 index in the string, 
and the remaining characters will occur the same number of times. 
Given a string s, determine if it is valid. If so, return YES, otherwise return NO.

For example, if s=abc, it is a valid string because frequencies are {a: 1, b: 1, c:1}. 
So is s=abcc because we can remove one c and have 1 of each character in the remaining string. 
If s=abccc however, the string is not valid as we can only remove 1 occurrence of c. 
That would leave character frequencies of {a: 1, b: 1, c:2}.

Function Description

Complete the isValid function in the editor below. 
It should return either the string YES or the string NO.

isValid has the following parameter(s):
s: a string
*/

function isValid(s) {
    s = s.trim()
    if (s.length === 1) return 'YES'
  // build the frequency object
  var frequency = {}
  for (let i=0; i<s.length; i++) {
      if (s[i] in frequency) frequency[s[i]] = BigInt(BigInt(frequency[s[i]]) + BigInt(1))
      else frequency[s[i]] = BigInt(1)
  }
  var common = 0;
  var keys = Object.keys(frequency)
  if (keys.length <= 1) return 'YES'

  if (frequency[keys[0]] === frequency[keys[1]]) common = frequency[keys[0]];
  else {
      if (keys.length === 2) return 'NO'
      if (frequency[keys[0]] === frequency[keys[2]]) common = frequency[keys[0]]
      else if (frequency[keys[1]] === frequency[keys[2]]) common = frequency[keys[1]]
      else return 'NO'
  }
  keys = keys.filter(key => frequency[key] !== common)
  if (keys.length === 0) return 'YES'
  if (keys.length > 1) return 'NO'
  if (frequency[keys[0]] === common + BigInt(1) || frequency[keys[0]] === BigInt(1)) return 'YES'
  else return 'NO'
}

// var s = 'aabbcd'
// console.log(isValid(s))
// s = 'aabbccddeefghi'
// console.log(isValid(s))
// s = 'abcdefghhgfedecba'
// console.log(isValid(s))
// s = 'a '
// console.log(isValid(s))
s = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'
console.log(isValid(s))
