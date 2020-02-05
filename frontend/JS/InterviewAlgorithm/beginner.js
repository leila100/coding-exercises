// 1- Verify a prime number?
/*
A prime number is a number that is divisible by only itself and 1 
*/
function isPrime(num) {
  let divisor = 2;
  while (num > divisor) {
    if (num % divisor === 0) return false;
    divisor++;
  }
  return true;
}
// console.log(isPrime(37));
// console.log(isPrime(40));

// 2- Find all prime factors of a number?
function getPrimeFactors(num) {
  const solution = [];
  let divisor = 2;
  while (num > 2) {
    if (num % divisor === 0) {
      solution.push(divisor);
      num = num / divisor;
    } else divisor++;
  }
  return solution;
}
// console.log(getPrimeFactors(45));
// console.log(getPrimeFactors(11));
// console.log(getPrimeFactors(69));
// console.log(getPrimeFactors(80));

// 3- Get nth Fibonacci number?
// fib(n) = fib(n-1) + fib(n-2) with fib(0) = 0; fib(1) = 1
function getNthFib(n) {
  const fibs = [0, 1];
  let len = 2;
  while (len <= n) {
    const fib = fibs[len - 1] + fibs[len - 2];
    fibs.push(fib);
    len++;
  }
  return fibs[n];
}
// console.log(getNthFib(5));
// console.log(getNthFib(12));
// console.log(getNthFib(2));

// 4- Find the greatest common divisor of two numbers?
function greatestCommonDivisor(num1, num2) {
  var divisor = 2,
    greatestDivisor = 1;

  // if num1 or num2 are negative values
  if (num1 < 2 || num2 < 2) return 1;

  while (num1 >= divisor && num2 >= divisor) {
    if (num1 % divisor == 0 && num2 % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}
function greatestCommonDivisorRecursive(num1, num2) {
  if (num2 == 0) return num1;
  else return greatestCommonDivisorRecursive(num2, num1 % num2);
}

// console.log(greatestCommonDivisor(25, 60));
// console.log(greatestCommonDivisor(14, 21));
// console.log(greatestCommonDivisorRecursive(14, 21));

// 5- Remove duplicate members from an array?
function removeDuplicates(arr) {
  // use a set
  //   return Array.from(new Set(arr));
  // if can't use set
  const noDups = {};
  const solution = [];
  for (num of arr) {
    if (!noDups[num]) {
      solution.push(num);
      noDups[num] = true;
    }
  }
  return solution;
}

const arr = [2, 5, 6, 2, 4, 5];
// console.log(removeDuplicates(arr));

// 6- Merge two sorted array?
function mergeSortedArrays(arr1, arr2) {
  let solution = [];
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) {
      solution.push(arr1[idx1]);
      idx1++;
    } else {
      solution.push(arr2[idx2]);
      idx2++;
    }
  }
  if (idx1 < arr1.length) solution = solution.concat(arr1.slice(idx1));
  if (idx2 < arr2.length) solution = solution.concat(arr2.slice(idx2));
  return solution;
}
const arr1 = [1, 2, 3, 4, 15, 25];
const arr2 = [2, 4, 6, 8, 10];
// console.log(mergeSortedArrays(arr1, arr2));

// 7- Swap two numbers without using a temp variable?
function swapTwoNums(a, b) {
  console.log("before swap: ", "a: ", a, ", b: ", b);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log("after swap: ", "a: ", a, ", b: ", b);
}
// swapTwoNums(4, 5);

// 8- Reverse a string in JavaScript?
function reverseString(str) {
  // O(n)
  const reverse = [];
  for (let i = str.length - 1; i >= 0; i--) reverse.push(str[i]);
  return reverse.join("");

  /* half complexity
    str = str.split('');
    var len = str.length,
      halfIndex = Math.floor(len / 2) - 1,
      revStr;
    // swap values starting until the middle
    for (var i = 0; i <= halfIndex; i++) {
      revStr = str[len - i - 1];
      str[len - i - 1] = str[i];
      str[i] = revStr;
    }
    return str.join('');
  */

  /*  recursive way
     if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
  */

  /* use build in methods
    if(!str || str.length <2) return str;
    return str.split('').reverse().join('');
  */
}

// Reverse words in place?
function reverseInPlace(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .reverse()
    .join("");
}

// console.log(reverseInPlace("I am the good boy"));
// "I ma eht doog yob"
// console.log(reverseString("Leila"));

// Reverse words in a sentence?
function reverseWords(str) {
  return str.split(" ").reverse();
}

// 9- Find the first non repeating char in a string?
function firstNonRepeating(str) {
  const repeating = new Set();
  let firsts = new Set();
  for (let char of str) {
    if (!repeating.has(char)) {
      firsts.add(char);
      repeating.add(char);
    } else firsts.delete(char);
  }
  console.log(firsts);
  return Array.from(firsts.values())[0];
}

// console.log(firstNonRepeating("the quick brown fox jumps then quickly blow air"));

// 10- Remove duplicate characters from a sting?
function removeDuplicateChars(str) {
  const repeating = new Set();
  let firsts = new Set();
  for (let char of str) {
    if (!repeating.has(char)) {
      firsts.add(char);
      repeating.add(char);
    } else firsts.delete(char);
  }
  return Array.from(firsts.values()).join("");
}
// console.log(removeDuplicateChars("berrouayel"));
// console.log(removeDuplicateChars("Learn more javascript dude"));

// 11- Verify a word is a palindrome?
function isPalindrome(word) {
  const reverse = word
    .split("")
    .reverse()
    .join("");
  return word === reverse;
}
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("toyota"));

// 12- Generate random between 5 to 7 by using defined function.
// generate numbers between 1 and 5
function rand5() {
  return 1 + Math.random() * 4;
}

// generate numbers between 5 and 7
function rand7() {
  return 5 + (rand5() / 5) * 2;
}

// 13- Find missing number from unsorted array from 1 to 100 of integers.
function findMissingNum(nums) {
  const numSet = new Set(nums);
  let i = 1;
  while (numSet.has(i)) i++;
  return i;
}
// the sum of a linear series of n numbers = n*(n+1)/2
function missingNumber(arr) {
  var n = arr.length + 1,
    sum = 0,
    expectedSum = (n * (n + 1)) / 2;
  for (var i = 0, len = arr.length; i < len; i++) sum += arr[i];
  return expectedSum - sum;
}

// console.log(findMissingNum([5, 2, 6, 1, 3]));
// console.log(missingNumber([5, 2, 6, 1, 3]));

// 14- Check whether any two numbers in an array sums to a given number?
function sumFinder(arr, sum) {
  const diffSet = new Set();
  let diff = 0;
  for (let num of arr) {
    diff = sum - num;
    if (diffSet.has(diff)) return true;
    else diffSet.add(num);
  }
  return false;
}
// console.log(sumFinder([6, 4, 3, 2, 1, 7], 9));
// console.log(sumFinder([6, 4, 3, 2, 1, 7], 2));

// 15- Find the largest sum of any two elements?
function topSum(arr) {
  // if (arr.length === 0) return 0;
  // if (arr.length === 1) return arr[0]
  // arr.sort((a, b) => a-b)
  // return arr[0] + arr[1]

  //better complexity
  // Just find the two largest number and return sum of them
  let max1 = arr[0];
  let max2 = arr[1];
  if (max1 < max2) {
    max1 = arr[1];
    max2 = arr[0];
  }
  for (let i = 2; i < arr.length; i++) {
    if (max1 < arr[i]) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) max2 = arr[i];
  }
  return max1 + max2;
}

// console.log(topSum([6, 4, 3, 2, 1, 7]));
// console.log(topSum([3, 31, 7, 2, 10, 1, 0]));
// console.log(topSum([3, 0]));

// 16- Total number of zeros from 1 up to n?
//Answer: If n = 100. number of 0 would be 11 (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100).
// Please note that 100 has two 0.
//Explanation: So the trick here is. if you have a number 1 to 50 the value is 5. just 50 divided by 10.
// However, if the value is 100. the value is 11. you will get by 100/10 = 10 and 10/10.
function countZero(n) {
  var count = 0;
  while (n > 0) {
    count += Math.floor(n / 10);
    n = n / 10;
  }
  return count;
}

// console.log(countZero(2014));

// 17- Match substring of a string?
function subStringFinder(str, subStr) {
  var idx = 0,
    i = 0,
    j = 0,
    len = str.length,
    subLen = subStr.length;

  for (; i < len; i++) {
    if (str[i] == subStr[0]) {
      let k = i;
      while (str[k] == subStr[j] && k < len && j < subLen) {
        j++;
        k++;
      }
      if (j == subLen) return i;
      else j = 0;
    }
  }
  return -1;
}
// console.log(subStringFinder("abbcdabbbbbck", "bbbck"));
// console.log(subStringFinder("abbcdabbbbbck", "bck"));

// 18- Create all permutation of a string?
function permutations(str) {
  var arr = str.split(""),
    len = arr.length,
    perms = [],
    rest,
    picked,
    restPerms,
    next;

  if (len == 0) return [str];

  for (var i = 0; i < len; i++) {
    rest = Object.create(arr);
    picked = rest.splice(i, 1);

    restPerms = permutations(rest.join(""));

    for (var j = 0, jLen = restPerms.length; j < jLen; j++) {
      next = picked.concat(restPerms[j]);
      perms.push(next.join(""));
    }
  }
  return perms;
}
console.log(permutations("maxi"));
