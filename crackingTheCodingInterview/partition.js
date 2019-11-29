/*
Write code to partition a linked list around a value x, such that all nodes less than x
come before all nodes greater or equal to x.
example:
input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 (partition = 5)
output: 3 -> 1 -> 2 ->   10 -> 5 -> 5-> 8
*/


class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const newNode = new Node(value)
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
            console.log(current.data)
            current = current.next;
        }
    }
}

partitionList = (head, partition) => {
    const before = new LinkedList();
    const after = new LinkedList();
    let current = head;
    while (current !== null) {
        if (current.data < partition) before.add(current.data)
        else after.add(current.data)
        current = current.next;
    }
    // append the before and after lists
    current = before.head;
    if (current === null) return after;
    while (current.next !== null) current = current.next;
    current.next = after.head;
    return before;
}

const list = new LinkedList()
list.add(4)
list.add(3)
list.add(2)
list.add(1)
list.add(7)
list.add(6)
list.add(5)

list.print()
console.log("*************")
const newList = partitionList(list.head, 4);
newList.print()