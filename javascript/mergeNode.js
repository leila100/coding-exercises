/*
Given pointers to the head nodes of 2 linked lists that merge together at some point, 
find the Node where the two lists merge. 
It is guaranteed that the two head Nodes will be different, and neither will be NULL.
*/
/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

function findMergeNode(headA, headB) {
  let currentA = headA;
  while (currentA) {
    let currentB = headB;
    while (currentB) {
      if (currentB === currentA) return currentB.data;
      currentB = currentB.next;
    }
    currentA = currentA.next;
  }
  return null;
}
