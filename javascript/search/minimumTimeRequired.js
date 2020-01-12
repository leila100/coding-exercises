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
  // When we're performing a search we need to start by defining some bounds
  // (we need to search between two bounds otherwise how do we know where to start/stop)

  // Well let's start with the upper bound.
  // How many days would it take if ALL machines were equally as slow as the slowest machine?
  //  That means the worst case is goal / machines * slowestMachine
  const min = Math.min(...machines);
  let minDay = Math.ceil(goal / machines.length) * min;

  // Same thing to find the lower bound.
  // How many days would it take if ALL machines were equally as fast as the fastest machine?
  // Our lower bound is then goal / machines * fastestMachine
  const max = Math.max(...machines);
  let maxDay = Math.ceil(goal / machines.length) * max;

  const getSum = (arr, d) => arr.reduce((total, machine) => total + Math.floor(d / machine), 0);

  while (minDay < maxDay) {
    // Now that we have our lower and upper bounds, we can finally start to search.
    // With binary search we always start at the middle of our bounds. (lowerBound + upperBound) / 2
    const day = Math.floor((maxDay + minDay) / 2);

    // Next we'll try to calculate how many items would be produced after this many days.
    const sum = getSum(machines, day);

    // Now we check if we've met our goal or not.
    if (sum >= goal) {
      // If we produce more than our goal, then the half way point that we chose is too high
      maxDay = day;
    } else {
      // If we produced less then the half way point was too low.
      minDay = day + 1;
    }
  }
  return minDay;
}

const machines = [2, 3, 2];
console.log(minTime(machines, 10));
// const machines = [2, 3];
// console.log(minTime(machines, 5));
// const machines = [1, 3, 4];
// console.log(minTime(machines, 10));
// const machines = [4, 5, 6];
// console.log(minTime(machines, 12));
// const machines = [2, 1];
// console.log(minTime(machines, 1));
