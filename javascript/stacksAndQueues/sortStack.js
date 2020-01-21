/*
Write a function sortStack that receives a stack of integers and returns another 
stack containing those same integers in sorted order. 
You may use at most one additional stack to hold items, but you may not copy 
the elements into any other data structure.

Example:
const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);

const sortedStack = sortStack(s); // sortedStack is also a Stack instance

sortedStack.printContents();  // should print 1, 4, 5, 6, 8, 10
Analyze the time and space complexity of your solution.
*/

class Stack {
    constructor() {
      this.storage = [];
    }
  
    push(item) {
      this.storage.push(item);
    }
  
    pop() {
      return this.storage.pop();
    }
  
    peek() {
      return this.storage[this.storage.length-1];
    }
  
    isEmpty() {
      return this.storage.length === 0;
    }
  
    printContents() {
      this.storage.forEach(elem => console.log(elem));
    }
  }

// function sortStack(stack) {
//     const stack2 = new Stack()
//     let len = 0;
//     while (!stack.isEmpty()) {
//         stack2.push(stack.pop())
//         len++
//     }

//     while (len > 0) {
//         let min = stack2.pop()
//         let count = 0;
//         // find min
//         while (!stack2.isEmpty() && count < len) {
//             let temp = stack2.pop()
//             if (temp < min) {
//                 stack.push(min)
//                 min = temp
//             } else stack.push(temp)
//             count++
//         }
//         stack2.push(min)
//         while(!stack.isEmpty()) {
//             stack2.push(stack.pop())
//         }
//         len--;
//     }
//     return stack2;
// }

// more efficient
function sortStack(input) {
    let output = new Stack();
    while (!input.isEmpty()) {
      let temp = input.pop();
      while(!output.isEmpty() && output.peek() > temp) {
        input.push(output.pop())
      }
      output.push(temp);
    }
    return output;
  }

const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);

const sortedStack = sortStack(s); // sortedStack is also a Stack instance

sortedStack.printContents();  // should print 1, 4, 5, 6, 8, 10