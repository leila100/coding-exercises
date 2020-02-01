(function(){
    var a = b = 3;
  })();
  
  console.log(typeof a);
  console.log(typeof b);

/*
Answer:
undefined
undefined
Because a and b can't be accessed outside of the function.
WRONG:
This will print out undefined and number. 
Since var a = b = 3 is equivalent to b = 3; var a = b; 
Making b global variable. 
Usage of chained notation is not recommended by many styles to avoid 
accidental global variable declarations.
*/