for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
  }
  
  for (let i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
  }
/*
answer:
5 printed 5 times with o to 4 printed in between
---
setTimeout function will be called after whole cycle is executed because of JavaScript event queue. 
Variables declared using var are global by default – meaning i would be equal to 5 after the end of a 
cycle. Since all setTimeout functions are called after the cycle, they all would print 5.

Output of second loop even more bizarre. 
In ECMA 6 specification, the specified behaviour is that in for(let i;;){} 
i gets a new binding for every iteration of the loop. 
Essentially each closure inside a loop gets a different instance of i
*/