/*
David has several containers, each with a number of balls in it. 
He has just enough containers to sort each type of ball he has into its own container. 
David wants to sort the balls using his sort method.
In a single operation, David can swap two balls located in different containers.
David wants to perform some number of swap operations such that:

Each container contains only balls of the same type.
No two balls of the same type are located in different containers.
print Possible on a new line if David can satisfy the conditions above for the given matrix. 
Otherwise, print Impossible.
*/

function organizingContainers(container) {
  // create an array of number of balls for each container
  // create an array of number of balls for each kind of balls
  // sort both array.
  // if same, return possible
  // else return impossible
  const num_balls_container = [];
  const num_balls_type = [];
  for (let i = 0; i < container[0].length; i++) num_balls_type.push(0); // initialize number of ball to 0

  for (let i = 0; i < container.length; i++) {
    const sum_balls = container[i].reduce((x, y) => x + y, 0);
    num_balls_container.push(sum_balls);
    for (let j = 0; j < container[i].length; j++) {
      num_balls_type[j] += container[i][j];
    }
  }
  num_balls_container.sort((a, b) => a - b);
  num_balls_type.sort((a, b) => a - b);
  for (let i = 0; i < num_balls_container.length; i++) {
    if (num_balls_container[i] !== num_balls_type[i]) return "Impossible";
  }
  return "Possible";
}

console.log(organizingContainers([[1, 1], [1, 1]]));
console.log(organizingContainers([[0, 2, 1], [1, 12, 1], [2, 0, 0]]));
console.log(organizingContainers([[1, 2, 3], [3, 1, 3], [1, 2, 3]]));
