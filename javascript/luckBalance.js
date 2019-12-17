/*
Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests. 
Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory. 
Each contest is described by two integers, L[i] and T[i]:

- L[i] is the amount of luck associated with a contest. 
If Lena wins the contest, her luck balance will decrease by L[i]; 
if she loses it, her luck balance will increase by L[i].
- T[i] denotes the contest's importance rating. 
It's equal to 1 if the contest is important, 
and it's equal to 0 if it's unimportant.

If Lena loses no more than k important contests, what is the maximum amount of luck she can have after 
competing in all the preliminary contests? This value may be negative.

For example, k=2 and:

Contest		L[i]	T[i]
1		5	1
2		1	1
3		4	0
If Lena loses all of the contests, her luck will be 5 + 1 + 4 = 10. 
Since she is allowed to lose 2 important contests, and there are only 2 important contests. 
She can lose all three contests to maximize her luck at 10. 
If k=1, she has to win at least 1 of the 2 important contests. 
She would choose to win the lowest value important contest worth 1. 
Her final luck will be 5 + 4 - 1 = 8.

Function Description

Complete the luckBalance function in the editor below. It should return an integer that represents the maximum luck balance achievable.

luckBalance has the following parameter(s):

k: the number of important contests Lena can lose
contests: a 2D array of integers where each contest[i] contains two integers that represent 
the luck balance and importance of the ith contest.
*/

function luckBalance(k, contests) {
  // Get the total of all the contests luck
  // get all important contests (1s array)
  // sort 1s array
  // return total - (1s-length -k)th elements from 1s array
  const importants = [];
  let total = 0;
  for (let i = 0; i < contests.length; i++) {
    const val = contests[i][0];
    const important = contests[i][1];
    if (important == 1) importants.push(val);
    total += val;
  }
  if (k >= importants.length) return total;
  importants.sort((a, b) => a - b);
  const win = importants.slice(0, importants.length - k).reduce((sum, next) => sum + next, 0);
  return total - 2 * win;
}

// const contests = [
//   [5, 1],
//   [2, 1],
//   [1, 1],
//   [8, 1],
//   [10, 0],
//   [5, 0]
// ];
const contests = [
  [5, 1],
  [1, 1],
  [4, 0]
];

console.log(luckBalance(3, contests));
