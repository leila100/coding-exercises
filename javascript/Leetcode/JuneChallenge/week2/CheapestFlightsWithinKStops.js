/*
There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.

Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

Example 1:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
Explanation: 
The graph looks like this:
                100
            0  --->  1
        500 |       | 100
            2 <-----
The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.

Example 2:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 0
Output: 500
Explanation: 
The cheapest price from city 0 to city 2 with at most 0 stop costs 500.
 

Constraints:

The number of nodes n will be in range [1, 100], with nodes labeled from 0 to n - 1.
The size of flights will be in range [0, n * (n - 1) / 2].
The format of each flight will be (src, dst, price).
The price of each flight will be in the range [1, 10000].
k is in the range of [0, n - 1].
There will not be any duplicated flights or self cycles.
*/

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue = (value) => {
    this.queue.push(value);
  };
  dequeue = () => {
    if (this.queue.length > 0) return this.queue.shift();
    return null;
  };
  size = () => this.queue.length;
}

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
  // build the neighbors and prices objects
  const neighbors = {};
  const prices = {};
  for (let i = 0; i < flights.length; i++) {
    prices[`${flights[i][0]}-${flights[i][1]}`] = flights[i][2];
    if (flights[i][0] in neighbors) {
      neighbors[flights[i][0]].push(flights[i][1]);
    } else neighbors[flights[i][0]] = [flights[i][1]];
  }
  if (K === 0) {
    const route = `${src}-${dst}`;
    if (route in prices) return prices[route];
    else return -1;
  }

  // find the cheapest trip
  const queue = new Queue();
  let minPrice;

  queue.enqueue({ path: [src], cost: 0 });
  while (queue.size() > 0) {
    const { path, cost } = queue.dequeue();
    if (path.length - 2 > K) continue;
    if (minPrice && cost > minPrice) continue;
    const currentCity = path[path.length - 1];
    if (currentCity === dst && path.length - 2 <= K) {
      let cost = 0;
      let current = path[0];
      for (let i = 1; i < path.length; i++) {
        const edge = `${current}-${path[i]}`;
        const price = prices[edge];
        cost += price;
        current = path[i];
      }
      if (!minPrice || cost < minPrice) minPrice = cost;
    } else {
      if (currentCity in neighbors) {
        for (let i = 0; i < neighbors[currentCity].length; i++) {
          const edge = `${currentCity}-${neighbors[currentCity][i]}`;
          const price = prices[edge];
          if (!minPrice || (minPrice && cost + price < minPrice)) {
            queue.enqueue({ path: [...path, neighbors[currentCity][i]], cost: cost + price });
          }
        }
      }
    }
  }
  if (!minPrice) return -1;
  return minPrice;
};

// const flights = [
//   [0, 1, 100],
//   [1, 2, 100],
//   [0, 2, 500],
// ];
// console.log(findCheapestPrice(3, flights, 0, 2, 2));

// const flights = [
//   [1, 2, 10],
//   [2, 0, 7],
//   [1, 3, 8],
//   [4, 0, 10],
//   [3, 4, 2],
//   [4, 2, 10],
//   [0, 3, 3],
//   [3, 1, 6],
//   [2, 4, 5],
// ];
// console.log(findCheapestPrice(5, flights, 0, 4, 1));

const flights = [
  [3, 4, 4],
  [2, 5, 6],
  [4, 7, 10],
  [9, 6, 5],
  [7, 4, 4],
  [6, 2, 10],
  [6, 8, 6],
  [7, 9, 4],
  [1, 5, 4],
  [1, 0, 4],
  [9, 7, 3],
  [7, 0, 5],
  [6, 5, 8],
  [1, 7, 6],
  [4, 0, 9],
  [5, 9, 1],
  [8, 7, 3],
  [1, 2, 6],
  [4, 1, 5],
  [5, 2, 4],
  [1, 9, 1],
  [7, 8, 10],
  [0, 4, 2],
  [7, 2, 8],
];
console.log(findCheapestPrice(5, flights, 6, 0, 7));
