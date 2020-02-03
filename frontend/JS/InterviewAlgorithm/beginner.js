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

// Remove duplicate members from an array?
// Merge two sorted array?
// Swap two numbers without using a temp variable?
// Reverse a string in JavaScript?
// Reverse words in a sentence?
// Reverse words in place?
// Find the first non repeating char in a string?
// Remove duplicate characters from a sting?
// Verify a word as palindrome?
// Generate random between 5 to 7 by using defined function.
// Find missing number from unsorted array of integers.
// Check whether any two numbers in an array sums to a given number?
// Find the largest sum of any two elements?
// Total number of zeros from 1 upto n?
// Match substring of a sting?
// Create all permutation of a string?
