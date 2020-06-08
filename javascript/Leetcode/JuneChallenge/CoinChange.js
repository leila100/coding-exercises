/*
You are given coins of different denominations and a total amount of money. 
Write a function to compute the number of combinations that make up that amount. 
You may assume that you have infinite number of each kind of coin.

Example 1:
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Example 2:
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:
Input: amount = 10, coins = [10] 
Output: 1
 
Note:
You can assume that
0 <= amount <= 5000
1 <= coin <= 5000
the number of coins is less than 500
the answer is guaranteed to fit into signed 32-bit integer
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

/*
Base Cases:
if amount=0 then just return empty set to make the change, so 1 way to make the change.
if no coins given, 0 ways to change the amount.

Rest of the cases:
For every coin we have an option to include it in solution or exclude it.
check if the coin value is less than or equal to the amount needed, 
if yes then we will find ways by including that coin and excluding that coin.

Include the coin: reduce the amount by coin value and use the sub problem solution (amount-v[i]).
Exclude the coin: solution for the same amount without considering that coin.
*/

var change = function (amount, coins) {
  const table = Array(coins.length + 1)
    .fill()
    .map(() => Array(amount + 1).fill(0));
  table[0][0] = 1;
  for (let j = 1; j <= coins.length; j++) {
    table[j][0] = 1; // number ways of selecting for amount zero is 1
    for (let i = 1; i <= amount; i++) {
      table[j][i] = table[j - 1][i]; // exclude current coin
      if (i - coins[j - 1] >= 0) {
        // check if amount  >= to the current i`th coin
        table[j][i] += table[j][i - coins[j - 1]]; // include current coin
      }
    }
  }
  return table[coins.length][amount];
};

//Recursive using include and exclude way

var changeRecursive = function (amount, coins) {
  // This recursive solution give TLE so for optimizing it we can cache the solutions of smaller problem
  const cache = {};
  return changeFunc(amount, coins, 0, cache);
};

var changeFunc = function (amount, coins, i, cache) {
  if (amount < 0) return 0; // if amount is negative by which means not valid - 0
  if (amount == 0) return 1; // we found exact change
  if (i == coins.length && amount > 0) return 0; // means coins over and n>0 so no solution
  let x, y;
  let key1 = `${amount - coins[i]} - ${i}`;
  let key2 = `${amount} - ${i + 1}`;
  if (key1 in cache) x = cache[key1];
  else {
    x = changeFunc(amount - coins[i], coins, i, cache);
    cache[key1] = x;
  }
  if (key2 in cache) y = cache[key2];
  else {
    y = changeFunc(amount, coins, i + 1, cache);
    cache[key2] = y;
  }
  const result = x + y; // include + exclude
  return result;
};

// either in 2d-DP array or in Map.

// const coins = [];
// console.log(change(0, coins));
const coins = [1, 2, 5];
console.log(change(5, coins));
console.log(changeRecursive(5, coins));
