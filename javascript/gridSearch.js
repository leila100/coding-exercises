/*
Given a 2D array of digits or grid, try to find the occurrence of a given 2D pattern of digits. 
For example, consider the following grid:

1234567890  
0987654321  
1111111111  
1111111111  
2222222222  

Assume we need to look for the following 2D pattern array:
876543  
111111  
111111

The 2D pattern begins at the second row and the third column of the grid. 
The pattern is said to be present in the grid.
*/

function gridSearch(G, P) {
  // use the string function includes to check if g includes p
  // search for the first row where P starts in G
  var rows = [];
  var index = null;

  for (let i = 0; i < G.length; i++) {
    index = G[i].indexOf(P[0]);
    if (index != -1) {
      rows.push(i);
    }
  }
  if (rows == []) return "NO";
  let all = true;
  for (let r = 0; r < rows.length; r++) {
    index = [];
    var nextIndex = null;
    var re = new RegExp(P[0], "g");
    var row = rows[r];
    var count = (G[row].match(re) || []).length;
    console.log(`count: ${count}`);
    var temp = [...G];
    for (let c = 0; c < count; c++) {
      console.log(temp);
      all = true;
      row = rows[r];
      index = temp[row].indexOf(P[0]);
      for (let row = 0; row < temp.length; row++) temp[row] = temp[row].slice(index);
      console.log(index);
      console.log(temp);
      for (let i = 1; i < P.length; i++) {
        row++;
        if (row == temp.length) break;
        nextIndex = temp[row].indexOf(P[i]);
        if (nextIndex == -1 || nextIndex != 0) {
          all = false;
          break;
        }
      }
      if (all == true) return "YES";
      for (let row = 0; row < temp.length; row++) temp[row] = temp[row].slice(index + P[0].length);
    }
  }
  if (all == true) return "YES";
  return "NO";
}

// var G = [
//   "7283455864",
//   "6731158619",
//   "8988242643",
//   "3830589324",
//   "2229505813",
//   "5633845374",
//   "6473530293",
//   "7053106601",
//   "0834282956",
//   "4607924137"
// ];
// var P = ["9505", "3845", "3530"];
// var G = [
//   "400453592126560",
//   "114213133098692",
//   "474386082879648",
//   "522356951189169",
//   "887109450487496",
//   "252802633388782",
//   "502771484966748",
//   "075975207693780",
//   "511799789562806",
//   "404007454272504",
//   "549043809916080",
//   "962410809534811",
//   "445893523733475",
//   "768705303214174",
//   "650629270887160"
// ];
// var P = ["99", "99"];
// var G = ["999999", "121011"];
// var P = ["99", "11"];
var G = ["1111111111111", "1111111111111", "1111011111111", "1111111111111", "1111111111111", "1010101010101"];
var P = ["11111", "11111", "11110"];
console.log(gridSearch(G, P));
