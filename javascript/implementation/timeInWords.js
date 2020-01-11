/*
Given the time in numerals we may convert it into words, as shown below:
    5:00 -> five o' clock
    5:01 -> one minute past five
    5:10 -> ten minutes past five
    5:15 -> quarter past five
    5:30 -> half past five
    5:40 -> twenty minutes to six
    5:45 -> quarter to six
    5:47 -> thirteen minutes to six
    5:28 -> twenty eight minutes past five

At minute=0, use o' clock. For 1 <= minutes <= 30, use past, and for 30 < minutes use to. 
Note the space between the apostrophe and clock in o' clock. 
Write a program which prints the time in words for the input given in the format described.

Function Description
Complete the timeInWords function in the editor below. 
It should return a time string as described.

timeInWords has the following parameter(s):
h: an integer representing hour of the day
m: an integer representing minutes after the hour
*/

function timeInWords(h, m) {
  // build dict for number until 30
  const words = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "half"
  };
  let answer = "";
  if (m === 0) answer = words[h] + " o' clock";
  else if (m <= 20) answer = words[m] + (m === 1 ? " minute past " : m === 15 ? " past " : " minutes past ") + words[h];
  else if (m > 20 && m < 30) answer = words[20] + " " + words[m - 20] + " minutes past " + words[h];
  else if (m === 30) answer = "half past " + words[h];
  else if (m > 30 && m <= 40) {
    if (h + 1 > 12) h = 0;
    answer += words[20] + " " + words[40 - m] + " minutes to " + words[h + 1];
  } else if (m > 40) {
    if (h + 1 > 12) h = 0;
    answer += words[60 - m] + (60 - m === 1 ? " minute to " : 60 - m === 15 ? " to " : " minutes to ") + words[h + 1];
  }
  return answer;
}

console.log(timeInWords(5, 0));
console.log(timeInWords(5, 1));
console.log(timeInWords(5, 15));
console.log(timeInWords(5, 25));
console.log(timeInWords(5, 59));
console.log(timeInWords(5, 49));
console.log(timeInWords(5, 45));
console.log(timeInWords(5, 37));
console.log(timeInWords(12, 57));
console.log(timeInWords(12, 01));
console.log(timeInWords(7, 29));
console.log(timeInWords(7, 30));
