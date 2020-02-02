const a = {},
    b = {c:'b'},
    c = {b:'c'};

a[b] = 111;
a[c] = 333;

console.log(a[b]);

/*
answer:
111
WRONG:
This will print out 333, not 111. 
When setting an object property, JavaScript will implicitly stringify the parameter value. 
In this case, since b and c are both objects, they will both be converted to "[object Object]". 
As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. 
Thus, setting or referencing a[c] is precisely the same as setting or referencing a[b].
*/