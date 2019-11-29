/*
Implement an algorithm to find the kth to last of a singly linked list */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
class LinkedList {
    constructor(data) {
        this.head = new Node(data)
    }
    add(value) {
        const newNode = new Node(value)
        let current = this.head;
        while (current.next !== null) current = current.next;
        current.next = newNode;
    }
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data)
            current = current.next;
        }
    }
}

printKthToLast = (head, k) => {
    if (head === null) return 0
    const index = printKthToLast(head.next, k) + 1;
    if (index === k) console.log(`The ${k}th to last node is ${head.data}`)
    return index;
}

kthToLastRecursive = (head, k) => {
    const node = new Node(0)
    return kthToLast(head, k, node)
}
kthToLast = (head, k, node) => {
    if (head === null) return null;
    const newNode = kthToLast(head.next, k, node)
    node.data += 1 
    if (node.data === k) return head;
    return newNode;
}

kthToLastIterative = (head, k) => {
    let p1 = head;
    let p2 = head;
    // Move p1 k nodes
    for (let i = 0; i < k; i++) {
        if (p1 === null) return null; // out of bounds
        p1 = p1.next;
    }
    // move p1 and p2. When p1 gets to end of list, p2 will be at the kth to last node
    while (p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}

const list = new LinkedList(4)
list.add(3)
list.add(2)
list.add(1)
list.add(7)
list.add(6)
list.add(5)
// list.print()
// printKthToLast(list.head, 5)
// const node = kthToLastRecursive(list.head, 2)
const node = kthToLastIterative(list.head, 5)
console.log(node.data)