function fibonacci(n) {
  // use recursion, and cache for thenumbers already calculated
  const sol = [];
  const cache = {};
  function calculate_fib(n, cache) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n in cache) return cache[n];
    const fib = calculate_fib(n - 1, cache) + calculate_fib(n - 2, cache);
    cache[n] = fib;
    return fib;
  }
  for (let i = 0; i < n; i++) {
    sol.push(calculate_fib(i, cache));
  }
  return sol;
}

console.log(fibonacci(15));
