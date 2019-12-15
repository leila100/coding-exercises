/*
Given two linked lists, determine if the two lists intersect.
Return the reference (not the value) pf intersecting node.
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
  add(newNode) {
    //   const newNode = new Node(value);
    if (this.head === null) this.head = newNode;
    else {
      let current = this.head;
      while (current.next !== null) current = current.next;
      current.next = newNode;
    }
  }
  print() {
    const l = [];
    let current = this.head;
    while (current !== null) {
      // console.log(current.data);
      l.push(current.data);
      current = current.next;
    }
    console.log(l.join(" -> "));
  }
}

function intersection(l1, l2) {
  // if last node is the same, the lists are intersecting
  current1 = l1.head;
  current2 = l2.head;
  size1 = 0;
  size2 = 0;
  while (current1 != null) {
    size1 += 1;
    current1 = current1.next;
  }
  while (current2 != null) {
    size2 += 1;
    current2 = current2.next;
  }
  if (current1 != current2) return false;
  // if sizes are different, ignore nodes from front of the longest list
  current1 = l1.head;
  current2 = l2.head;
  if (size1 > size2) {
    for (let i = 0; i < size1 - size2; i++) current1 = current1.next;
  } else if (size2 > size1) {
    for (let i = 0; i < size2 - size1; i++) current2 = current2.next;
  }
  // Go through list looking for intersection
  while (current1 != null && current2 != null && current1 != current2) {
    current1 = current1.next;
    current2 = current2.next;
  }
  if (current1 != null && current1 == current2) return current1;
  return null;
}

const list1 = new LinkedList();
const newNode1 = new Node(1);
const newNode2 = new Node(2);
const newNode3 = new Node(3);
const newNode4 = new Node(4);
const newNode5 = new Node(5);
const newNode6 = new Node(6);
const newNode7 = new Node(7);
const newNode8 = new Node(8);

list1.add(newNode1);
list1.add(newNode2);
list1.add(newNode3);
list1.add(newNode7);
list1.add(newNode4);

const list2 = new LinkedList();
list2.add(newNode5);
list2.add(newNode6);
list2.add(newNode8);

list1.print();
list2.print();
const n = intersection(list1, list2);
console.log(n ? n.data : null);
