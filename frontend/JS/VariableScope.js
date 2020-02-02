var foo = 10;
bar = 3;
(function () {
  var foo = 2;
  bar = 1;
}())
bar = bar + foo;
console.log(bar);

/*
Answer: 11
bar gets modified inside the function, because it is global
foo keeps it's value of 10. 
There's another foo inside the function. It's a different one.
---
There are two tricks here. First – executing code using function scope – 
(function(){}()) pattern. Second – exploiting global/local scope overlap. 
Both foo and bar defined in global scope. Function redefines foo in local scope, 
so global foo is not changed, when bar gets reassigned to 1. Finally, 1 + 10 = 11.
---
*/
