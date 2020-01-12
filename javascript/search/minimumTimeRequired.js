/*
You are planning production for an order. 
You have a number of machines that each have a fixed number of days to produce an item. 
Given that all the machines operate simultaneously, determine the minimum number of days 
to produce the required order.

For example, you have to produce goal=10 items. 
You have three machines that take machines = [2, 3, 2] days to produce an item. 
The following is a schedule of items produced:

Day Production  Count
2   2               2
3   1               3
4   2               5
6   3               8
8   2              10
It takes 8 days to produce 10 items using these machines.

Function Description
Complete the minimumTime function in the editor below. 
It should return an integer representing the minimum number of days required to complete the order.

minimumTime has the following parameter(s):
machines: an array of integers representing days to produce one item per machine
goal: an integer, the number of items required to complete the order
*/

function minTime(machines, goal) {
  var count = 0;
  // build dict with how many machines take d days
  var days = {};
  for (day of machines) {
    if (day in days) days[day]++;
    else days[day] = 1;
  }
  var day = 1;
  var keys = Object.keys(days);
  while (count <= goal) {
    for (num of keys) {
      if (day % parseInt(num) === 0) {
        count += days[num];
        if (count >= goal) return day;
      }
      console.log(day % parseInt(num), count, day);
    }
    day++;
  }
  return day;
}

// const machines = [2, 3, 2];
// console.log(minTime(machines, 10));
// const machines = [2, 3];
// console.log(minTime(machines, 5));
// const machines = [1, 3, 4];
// console.log(minTime(machines, 10));
// const machines = [4, 5, 6];
// console.log(minTime(machines, 12));
const machines = [2, 1];
console.log(minTime(machines, 1));
