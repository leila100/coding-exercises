/*
A queue is an abstract data type that maintains the order in which elements were added to it, 
allowing the oldest elements to be removed from the front and new elements to be added to the rear. 
This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue 
(i.e., the one that has been waiting the longest) is always the first one to be removed.

A basic queue has the following operations:
Enqueue: add a new element to the end of the queue.
Dequeue: remove the element from the front of the queue and return it.

In this challenge, you must first implement a queue using two stacks. 
Then process q queries, where each query is one of the following 3 types:

1 x: Enqueue element  into the end of the queue.
2: Dequeue the element at the front of the queue.
3: Print the element at the front of the queue.
*/

class Queue {
  constructor() {
    this.storage = [];
    this.storage2 = [];
    this.top = "";
    this.dequeueNum = 0;
  }

  enqueue(val) {
    if (this.storage.length === 0) this.top = val;
    this.storage.push(val);
  }

  dequeue() {
    const l = this.storage.length;
    if (this.storage2.length === 0) {
      const tempStorage = this.storage.slice(this.dequeueNum + 1, l);
      this.storage = [...tempStorage];
      while (tempStorage.length > 0) this.storage2.push(tempStorage.pop());
      this.top = this.storage2.pop();
      this.storage2.push(this.top);
      this.dequeueNum = 0;
    } else {
      this.storage2.pop();
      this.dequeueNum++;
      if (this.storage2.length === 0) this.top = this.storage[this.dequeueNum];
      else {
        this.top = this.storage2.pop();
        this.storage2.push(this.top);
      }
    }
  }

  printFront() {
    console.log(this.top);
  }
}

function processData(input) {
  const queue = new Queue();
  const inputs = input.split("\n");
  const n = parseInt(inputs[0]);
  for (let i = 1; i <= n; i++) {
    const [code, val] = inputs[i].split(" ");
    if (code === "1") queue.enqueue(val);
    else if (code === "2") queue.dequeue();
    else if (code === "3") queue.printFront();
  }
}

// const input = "10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2";
const input = "8\n1 15\n1 17\n3\n1 25\n2\n3\n2\n3";
processData(input);
