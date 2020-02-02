console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(9007199254740993 === 9007199254740992);

/*
answer:
0.3
false
true
WRONG:
0.30000000000000004
false
true
Number in JS are represented as double-precision 64-bit binary format IEEE 754 values. 
Thus there are rounding errors, as well as there is Number.MAX_SAFE_INTEGER, 
after which Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER + 1 equals to true. 
Number.EPSILON should be used to avoid rounding error while comparing numbers in javascript for equality.
*/