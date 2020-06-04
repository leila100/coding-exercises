/*
There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost 
of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

Example 1:

Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
 
Note:

1 <= costs.length <= 100
It is guaranteed that costs.length is even.
1 <= costs[i][0], costs[i][1] <= 1000
*/

/**
 * @param {number[][]} costs
 * @return {number}
 */

/*
 EXPLANATION:-
The problem is to send n persons to city A 
and n persons to city B with minimum cost.

The idea is to send each person to city A.
costs = [[10,20],[30,200],[400,50],[30,20]]

So, totalCost = 10 + 30 + 400 + 30 = 470

Now, we need to send n persons to city B.
Which persons do we need to send city B?

Here, we need to minimize the cost.
We have already paid money to go to city A.
So, Send the persons to city B who get more refund
so that our cost will be minimized.

So, maintain refunds of each person
refund[i] = cost[i][1] - cost[i][0]

So, refunds of each person
    refund = [10, 170, -350, -10]

Here, refund +ve means we need to pay
             -ve means we will get refund.

So, sort the refund array.

refund = [-350, -10, 10, 170]

Now, get refund for N persons,
totalCost += 470 + -350 + -10 = 110

So, minimum cost is 110
*/

var twoCitySchedCost = function (costs) {
  let total = costs.reduce((sum, next) => sum + next[0], 0);
  const n = costs.length / 2;
  const refunds = costs.map((person) => person[1] - person[0]);
  refunds.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) total += refunds[i];
  return total;
};

// console.log(
//   twoCitySchedCost([
//     [10, 20],
//     [30, 200],
//     [400, 50],
//     [30, 20],
//   ])
// );

const costs = [
  [259, 770],
  [448, 54],
  [926, 667],
  [184, 139],
  [840, 118],
  [577, 469],
];

// const costs = [
//   [515, 563],
//   [451, 713],
//   [537, 709],
//   [343, 819],
//   [855, 779],
//   [457, 60],
//   [650, 359],
//   [631, 42],
// ];
console.log(twoCitySchedCost(costs));
