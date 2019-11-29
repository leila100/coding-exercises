/*
Given a node (not the head or the tail), delete that node from list. */

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

deleteNode = (node) => {
    if (node === null || node.next === null) return false;
    // Copy data from the next node to the given node
    // Remove next node
    node.data = node.next.data;
    node.next = node.next.next;
    return true;
}

const list = new LinkedList(4)
list.add(3)
list.add(2)
list.add(1)
list.add(7)
list.add(6)
list.add(5)

list.print()
const nodeToDelete = list.head.next.next;
console.log(deleteNode(nodeToDelete))
list.print()