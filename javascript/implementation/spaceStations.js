/*
Flatland is a country with a number of cities, some of which have space stations. 
Cities are numbered consecutively and each has a road of 1km length connecting it to the next city. 
It is not a circular route, so the first city doesn't connect with the last city. 
Determine the maximum distance from any city to it's nearest space station.

For example, there are n=3 cities and m=1 of them has a space station, city 1. 
They occur consecutively along a route. 
City 2 is 2-1=1 unit away and city 3 is 3-1=2 units away. 
City 1 is 0 units from its nearest space station as one is located there. 
The maximum distance is 2.

Function Description
Complete the flatlandSpaceStations function in the editor below.
It should return an integer that represents the maximum distance any city is from a space station.

flatlandSpaceStations has the following parameter(s):
n: the number of cities
c: an integer array that contains the indices of cities with a space station, 1-based indexing
*/

function flatlandSpaceStations(n, c) {
  var max = 0;
  var idx = 0;
  while (idx < n) {
    var min = -1;
    for (let index of c) {
      var diff = Math.abs(index - idx);
      if (min === -1 || diff < min) min = diff;
    }
    if (min > max) max = min;
    idx++;
  }
  return max;
}

// const c = [0, 4];
// console.log(flatlandSpaceStations(5, c));
const c = [0, 1, 2, 4, 3, 5];
console.log(flatlandSpaceStations(6, c));
