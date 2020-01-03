/*
Little Bobby loves chocolate. He frequently goes to his favorite store, Penny Auntie, to buy them. 
They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.

For example, Bobby has n=15 to spend on bars of chocolate that cost c=3 each. 
He can turn in m=2 wrappers to receive another bar. 
Initially, he buys 5 bars and has 5 wrappers after eating them. 
He turns in 4 of them, leaving him with 1, for 2 more bars. 
After eating those two, he has 3 wrappers, turns in 2 leaving him with 1 wrapper and his new bar. 
Once he eats that one, he has 2 wrappers and turns them in for another bar. 
After eating that one, he only has 1 wrapper, and his feast ends. 
Overall, he has eaten 5 + 2 + 1 + 1 = 9 bars.

Function Description
Complete the chocolateFeast function in the editor below. 
It must return the number of chocolates Bobby can eat after taking full advantage of the promotion.

chocolateFeast has the following parameter(s):

n: an integer representing Bobby's initial amount of money
c: an integer representing the cost of a chocolate bar
m: an integer representing the number of wrappers he can turn in for a free bar
Note: Little Bobby will always turn in his wrappers if he has enough to get a free chocolate.
*/

function chocolateFeast(n, c, m) {
  var wrappersLeft = 0;
  var choco = Math.floor(n / c);
  var count = choco;
  while (wrappersLeft >= m || choco > 0) {
    wrappersLeft += choco;
    choco = Math.floor(wrappersLeft / m);
    wrappersLeft -= choco * m;
    count += choco;
  }
  return count;
}

console.log(chocolateFeast(10, 2, 5));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(6, 2, 2));
