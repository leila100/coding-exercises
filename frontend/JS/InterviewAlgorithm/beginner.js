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
console.log(isPalindrome("madam"));
console.log(isPalindrome("toyota"));

// Generate random between 5 to 7 by using defined function.
// Find missing number from unsorted array of integers.
// Check whether any two numbers in an array sums to a given number?
// Find the largest sum of any two elements?
// Total number of zeros from 1 upto n?
// Match substring of a sting?
// Create all permutation of a string?
