var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})();

/*
Answer: 
5  ---- console out the value of global x
10 ---- console out the value of local x
WRONG:
This will print out undefined and 10 rather than 5 and 10 since JavaScript 
always moves variable declarations (not initializations) to the top of the scope, 
making the code equivalent to:

var x = 5;
(function () {
    var x;
    console.log(x);
    x = 10;
    console.log(x); 
})();
*/