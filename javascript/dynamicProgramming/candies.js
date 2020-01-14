/*
Alice is a kindergarten teacher. 
She wants to give some candies to the children in her class.  
All the children sit in a line and each of them has a rating 
score according to his or her performance in the class.  
Alice wants to give at least 1 candy to each child. 
If two children sit next to each other, then the one with the 
higher rating must get more candies. Alice wants to minimize 
the total number of candies she must buy.

For example, assume her students' ratings are [4, 6, 4, 5, 6, 2]. 
She gives the students candy in the following minimal amounts: [1, 2, 1, 2, 3, 1]. 
She must buy a minimum of 10 candies.

Function Description
Complete the candies function in the editor below. 
It must return the minimum number of candies Alice must buy.

candies has the following parameter(s):
n: an integer, the number of children in the class
arr: an array of integers representing the ratings of each student
*/

function candies(n, arr) {
  /*
    Find sequences of numbers which are always increasing and those which are decreasing. 
    Initialize a count array of length n with all 1. 
    while traversing the array forward, whenever there's an increasing, set to count + 1 
    Then traverse the array backwards and check for the same increasing pattern 
    but only set to count + 1 when previous values decrease. 
    this is because we might already have set the value to something bigger before while traversing forward. 
  */
  var val = Array(n).fill(1);

  //Loop forward -->
  for (var i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) val[i] = val[i - 1] + 1;
  }

  var sum = val[n - 1];
  //Loop back <--
  for (var i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1] && val[i] <= val[i + 1]) {
      val[i] = val[i + 1] + 1;
    }
    sum += val[i];
  }
  return sum;
}

// const arr = [4, 6, 4, 5, 6, 2];
// const arr = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1];
// const arr = [2, 4, 3, 5, 2, 6, 4, 5];
// const arr = [9, 2, 3, 6, 5, 4, 3, 2, 2, 2];
// const arr = [3, 1, 2, 2];
const arr = [2, 9, 4, 6, 4, 3, 2, 1];
console.log(candies(8, arr));
