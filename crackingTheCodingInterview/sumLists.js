/*
You have 2 numbers represented by a linked list, where each node contains a single digit.
The digits are stored in reverse order.
Write a function that adds the two numbers and returns the sum as a linked list 
(the result should be in reverse order too)
example:
input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is 317 + 295
output: 2 -> 1 -> 9. That is 912

Follow up: suppose rge digits are stored in forward order.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const newNode = new Node(value);
    if (this.head === null) this.head = newNode;
    else {
      let current = this.head;
      while (current.next !== null) current = current.next;
      current.next = newNode;
    }
  }
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

function addLists(list1, list2) {
  let current1 = list1;
  let current2 = list2;
  let carry = 0;
  const result = new LinkedList();
  while (current1 != null) {
    const sum = carry + current1.data + current2.data;
    console.log(`sum: ${sum}`);
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    result.add(digit);
    console.log(`adding ${digit} to result`);
    current1 = current1.next;
    current2 = current2.next;
  }
  if (carry != 0) result.add(carry);
  console.log(`adding ${carry} to result`);
  return result;
}

const list1 = new LinkedList();
list1.add(7);
list1.add(1);
list1.add(6);

const list2 = new LinkedList();
list2.add(5);
list2.add(9);
list2.add(2);
const result = addLists(list1.head, list2.head);
result.print();
