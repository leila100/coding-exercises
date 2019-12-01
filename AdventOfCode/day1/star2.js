/*
So, for each module mass, calculate its fuel and add it to the total. 
Then, treat the fuel amount you just calculated as the input mass and repeat the process, 
continuing until a fuel requirement is zero or negative. For example:

A module of mass 14 requires 2 fuel. 
This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), 
so the total fuel required is still just 2.
At first, a module of mass 1969 requires 654 fuel. 
Then, this fuel requires 216 more fuel (654 / 3 - 2). 
216 then requires 70 more fuel, which requires 21 fuel, 
which requires 5 fuel, which requires no further fuel. 
So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
What is the sum of the fuel requirements for all of the modules on your spacecraft 
when also taking into account the mass of the added fuel? 
(Calculate the fuel requirements for each module separately, then add them all up at the end.)
*/
const fs = require("fs");

fuelEachMass = mass => {
  let fuel = 0;
  let sum = 0;
  while (mass >= 0) {
    fuel = Math.floor(mass / 3) - 2;
    if (fuel < 0) break;
    mass = fuel;
    sum += fuel;
  }
  return sum;
};

getFuelRequired = () => {
  fs.readFile("input.txt", (err, data) => {
    let sum = 0;
    if (err) throw err;
    const masses = data.toString().split("\n");
    for (let i = 0; i < masses.length; i++) {
      if (masses[i] && masses[i].length > 0) sum += fuelEachMass(parseInt(masses[i]));
    }
    console.log(`total sum: ${sum}`);
  });
};

getFuelRequired();
