/*
Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. 
There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount 
to spend, and he wants to maximize the number of toys he buys with this money.

Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? 
For example, if prices=[1, 2, 3, 4] and Mark has k=7 to spend, he can buy items [1, 2, 3] for 6, or [3, 4] for 7 units of currency. 
He would choose the first group of 3 items.

Function Description

Complete the function maximumToys in the editor below. It should return an integer representing the 
maximum number of toys Mark can purchase.

maximumToys has the following parameter(s):

prices: an array of integers representing toy prices
k: an integer, Mark's budget
*/

function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);
  var budget = k;
  var count = 0;
  for (let i = 0; i < prices.length; i++) {
    if (budget - prices[i] > 0) {
      budget -= prices[i];
      count += 1;
    } else return count;
  }
  return prices.length;
}

prices = [1, 12, 5, 111, 200, 1000, 10];
console.log(maximumToys(prices, 50));
