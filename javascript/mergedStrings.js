/*
At a job interview, you are challenged to write an algorithm to check if a given string, s, 
can be formed from two other strings, part1 and part2.
The restriction is that the characters in part1 and part2 should be in the same order as in s.
The interviewer gives you the following example
'codewars' is a merge from 'cdw' and 'oears':
    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears
*/

function isMerge(s, part1, part2) {
  if (part1.length + part2.length !== s.length) return False;

  if (!part1 || !part2 || !s) {
    if (part1 + part2 === s) return true;
    else return false;
  }
  if (part1[0] !== s[0] && part2[0] !== s[0]) return false;

  if (part1[0] === s[0] && isMerge(s.substr(1), part1.substr(1), part2)) return true;
  if (part2[0] === s[0] && isMerge(s.substr(1), part1, part2.substr(1))) return true;
  return false;
}

// const part1 = "cdw";
// const part2 = "oears";
s = "Bananas from Bahamas";
const part1 = "Bahas";
const part2 = "Bananas from am";

console.log(isMerge(s, part1, part2));
