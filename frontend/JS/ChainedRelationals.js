console.log(1 < 2 < 2);
console.log(3 > 2 > 1);

/*
answer:
false
true
WRONG:
This will print out true and false. 
There are two tricks here. 
In Javascript relational operators evaluated from left to right (I did from right to left), 
false equals 0, and true equals 1 for number comparisons. 
First expression after first step is true < 2 => 1 < 2 => true, and 
second is true > 1 => 1 > 1 => false.
*/