/*
Given a reference to the head of a doubly-linked list and an integer, data, 
create a new DoublyLinkedListNode object having data value data and insert 
it into a sorted linked list while maintaining the sort.

Function Description
Complete the sortedInsert function in the editor below. 
It must return a reference to the head of your modified DoublyLinkedList.

sortedInsert has two parameters:
head: A reference to the head of a doubly-linked list of DoublyLinkedListNode objects.
data: An integer denoting the value of the  field for the DoublyLinkedListNode you must insert into the list.
Note: Recall that an empty list (i.e., where ) and a list with one element are sorted lists.
*/

function sortedInsert(head, data) {
  const newNode = new DoublyLinkedListNode(data);
  if (!head) return newNode;
  if (head.data > data) {
    newNode.next = head;
    head.prev = newNode;
    return newNode;
  }
  let currentNode = head;
  while (currentNode) {
    if (currentNode.data > data) {
      newNode.next = currentNode;
      newNode.prev = currentNode.prev;
      currentNode.prev.next = newNode;
      currentNode.prev = newNode;
      return head;
    }
    if (!currentNode.next) break;
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  newNode.prev = currentNode;
  return head;
}
