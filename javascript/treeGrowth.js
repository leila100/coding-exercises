/*
The Utopian Tree goes through 2 cycles of growth every year. 
Each spring, it doubles in height. 
Each summer, its height increases by 1 meter.

Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. 
How tall will her tree be after n growth cycles?
*/

function utopianTree(n) {
  let cycle = 0;
  let height = 1;
  while (cycle < n) {
    if (cycle % 2 === 0) {
      height *= 2;
    } else {
      height += 1;
    }
    cycle += 1;
  }
  return height;
}

console.log(utopianTree(5));
console.log(utopianTree(3));
console.log(utopianTree(0));
console.log(utopianTree(1));
console.log(utopianTree(4));
