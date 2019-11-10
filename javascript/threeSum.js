function threeNumberSum(arr, target) {
  const solution = [];
  // keep track of target-arr[num] in object
  // for each value in obj, find two numbers in arr that make up this value
  const obj1 = {};
  // build obj
  for (let i = 0; i < arr.length; i++) {
    obj1[arr[i]] = target - arr[i];
  }
  const arrSet = new Set(arr);
  const used = new Set();
  // go through set, and check if there are two number that add up to the values in obj1
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    const value = obj1[key];
    for (let j = 0; j < arr.length; j++) {
      const diff = value - arr[j];
      if (arr[j] === key || arr[j] === diff || key === diff) continue;
      if (arrSet.has(diff)) {
        if (used.has(diff) && used.has(key) && used.has(arr[j])) continue;
        const sol = [key, diff, arr[j]];
        sol.sort((a, b) => a - b);
        if (used.has(sol.join(""))) continue;
        solution.push(sol);
        used.add(sol.join(""));
      }
    }
  }
  const sort_solution = solution.sort((a, b) => a[0] - b[0]);
  sort_solution.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return 0;
  });
  sort_solution.sort((a, b) => {
    if (a[0] === b[0] && a[1] === b[1]) return a[2] - b[2];
    return 0;
  });
  return sort_solution;
}
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
const arr = [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5];
console.log(threeNumberSum(arr, 0));
