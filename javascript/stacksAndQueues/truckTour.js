/*
Suppose there is a circle. 
There are N petrol pumps on that circle. 
Petrol pumps are numbered 0 to (N-1) (both inclusive). 
You have two pieces of information corresponding to each of the petrol pump: 
  (1) the amount of petrol that particular petrol pump will give, and 
  (2) the distance from that petrol pump to the next petrol pump.

Initially, you have a tank of infinite capacity carrying no petrol. 
You can start the tour at any of the petrol pumps. 
Calculate the first point from where the truck will be able to complete the circle. 
Consider that the truck will stop at each of the petrol pumps. 
The truck will move one kilometer for each litre of the petrol.
*/

function truckTour(petrolpumps) {
  var start = 0;
  var current = 0;
  var currentGas = 0;
  var stationGas;
  var nextStation;
  while (true) {
      stationGas = petrolpumps[current][0]
      nextStation = petrolpumps[current][1]
      currentGas += stationGas;
      currentGas -= nextStation;
      current ++;
      if (current === petrolpumps.length) current = 0;
      if (currentGas < 0) {
          currentGas = 0;
          start = current;
      } else {
          if (current === start) return start;
      }
  }
}

const petrolpumps = [[1, 5], [10, 3], [3, 4]]
console.log(truckTour(petrolpumps))