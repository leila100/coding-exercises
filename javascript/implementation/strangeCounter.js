/*
ob has a strange counter. At the first second, it displays the number 3. 
Each second, the number displayed by the counter decrements by 1 until it reaches 1.

The counter counts down in cycles. 
In next second, the timer resets to 2 x initial number for prior cycle and continues counting down. 
The diagram below shows the counter values for each time t in the first three cycles:

1 | 3       4 | 6     10 | 12
2 | 2       5 | 5     11 | 11
3 | 1       6 | 4     12 | 10
            7 | 3     13 | 9
            8 | 2     14 | 8
            9 | 1     15 | 7
                      16 | 6
                      ------
                      21 | 1

Find and print the value displayed by the counter at time t.

Function Description

Complete the strangeCounter function in the editor below. 
It should return the integer value displayed by the counter at time .

strangeCounter has the following parameter(s):
t: an integer
*/

// Not time efficient
// function strangeCounter(t) {
//   var time = 1;
//   var value = 3;
//   var initialValue = 3;
//   while (time != t) {
//     if (value == 1) {
//       initialValue *= 2;
//       value = initialValue;
//     } else value--;
//     time++;
//   }
//   console.log(`value for time ${t} is ${value}`);
//   return value;
// }

function strangeCounter(t) {
  var cycle = 0;
  while (true) {
    var initialValue = 3 * 2 ** cycle;
    if (t >= initialValue - 2 && t <= 2 * initialValue - 3) {
      return 2 * initialValue - t - 2;
    }
    cycle++;
  }
}

console.log(strangeCounter(14));
