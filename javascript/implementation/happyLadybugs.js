/*
Happy Ladybugs is a board game having the following properties:

The board is represented by a string, b, of length n. 
The ith character of the string, b[i], denotes the ith cell of the board.
If b[i] is an underscore (i.e., _), it means the  cell of the board is empty.
If b[i] is an uppercase English alphabetic letter (ascii[A-Z]), it means the ith cell contains a ladybug of color b[i].
String b will not contain any other characters.
A ladybug is happy only when its left or right adjacent cell (i.e.b[+- 1], ) is occupied by another ladybug having the same color.
In a single move, you can move a ladybug from its current position to any empty cell.

Given the values of n and b, determine if it's possible to make all the ladybugs happy. 
Print YES if all the ladybugs can be made happy through some number of moves. 
Otherwise, print NO.

As an example, b=[YYR_B_BR]. 
You can move the rightmost B and R to make b=[YYRRBB__] and all the ladybugs are happy.

Function Description

Complete the happyLadybugs function in the editor below. 
It should either 'YES' or 'NO'.

happyLadybugs has the following parameters:
b: a string that represents the initial positions and colors of the ladybugs
*/

function happyLadybugs(b) {
  var counts = {};
  for (let i = 0; i < b.length; i++) {
    if (b[i] in counts) counts[b[i]]++;
    else counts[b[i]] = 1;
  }
  console.log(counts);
  // count how many empty cells
  //   var countEmpty = (b.match(/_/g) || []).length;
  //   if (countEmpty == 0) {
  if (!("_" in counts)) {
    // If no empty cells, check that all ladybugs are happy
    for (let i = 0; i < b.length; i++) {
      if (
        (i == 0 && b[i] != b[i + 1]) ||
        (i + 1 == b.length && b[i - 1] != b[i]) ||
        (b[i - 1] != b[i] && b[i + 1] != b[i])
      )
        return "NO";
    }
    return "YES";
  } else {
    // check that there are no color alone, count = 1
    for (let i = 0; i < b.length; i++) {
      //   if (b[i] == "_") continue;
      //   let count = (b.match(new RegExp(b[i], "g")) || []).length;
      //   if (count == 1) return "NO";
      if (b[i] != "_" && b[i] in counts && counts[b[i]] == 1) return "NO";
    }
    return "YES";
  }
}

// const b = "YYR_B_BR";
// const b = "BB_YY";
// const b = "BAAAB";
// const b = "_BY";
const b = "B";
console.log(happyLadybugs(b));
