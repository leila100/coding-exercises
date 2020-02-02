var result = (function(a) {
    return a*a;
  }(5.5));
  console.log(result); //guess the output

  // answer
  /* 
  I would answer 30.25. 
  The trick is, if you put parentheses with arguments immediately after function declaration, 
  that will be considered a function call.
  */
