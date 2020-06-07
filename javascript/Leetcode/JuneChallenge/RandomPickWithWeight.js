/*
Given an array w of positive integers, where w[i] describes the weight of index i, 
write a function pickIndex which randomly picks an index in proportion to its weight.

Note:

1 <= w.length <= 10000
1 <= w[i] <= 10^5
pickIndex will be called at most 10000 times.

Example 1:
Input: 
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]

Example 2:
Input: 
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]

Explanation of Input Syntax:
The input is two lists: the subroutines called and their arguments. 
Solution's constructor has one argument, the array w. 
pickIndex has no arguments. 
Arguments are always wrapped with a list, even if there aren't any.
*/

/*
The more the weight is, the higher chances of getting that index randomly.

suppose weights = [1, 3]
then 3 is larger, so there are high chances to get index 1.

We can know the chances of selecting each index by knowing their probability.

P(i) = weight[i]/totalWeight

totalWeight = 1 + 3 = 4
So, for index 0, P(0) = 1/4  = 0.25 = 25%
for index 1, P(1) = 3/4 = 0.75 = 75%

So, there are 25% of chances to pick index 0 and 75% chances to pick index 1.
*/

/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.weights = w;
  this.total = this.weights.reduce((sum, next) => sum + next, 0);
  this.percents = this.weights.map((w) => w / this.total);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  console.log(this.percents);
  let index = 0;
  let selector = Math.random();
  while (selector > 0) {
    selector -= this.percents[index];
    index++;
  }
  // Because the selector was decremented before index was
  // incremented we need to decrement the index to get the
  // element that actually exited the loop.
  index--;
  return index;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

var obj = new Solution([1, 3, 5]);
var param_1 = obj.pickIndex();
console.log(param_1);
