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

// not efficient O(m * n)
// function findMergeNode(headA, headB) {
//   let currentA = headA;
//   while (currentA) {
//     let currentB = headB;
//     while (currentB) {
//       if (currentB === currentA) return currentB.data;
//       currentB = currentB.next;
//     }
//     currentA = currentA.next;
//   }
//   return null;
// }

function listLength(head) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}

// more efficient O(m+n)
function findMergeNode(headA, headB) {
  const lenA = listLength(headA);
  const lenB = listLength(headB);
  let diff = 0;

  // get the difference of length
  // traverse the largest list until both are same length
  if (lenA > lenB) {
    diff = lenA - lenB;
    for (let i = 0; i < diff; i++) headA = headA.next;
  } else {
    diff = lenB - lenA;
    for (let i = 0; i < diff; i++) headB = headB.next;
  }

  let currentA = headA;
  let currentB = headB;

  // traverse list until find connecting node
  while (currentA) {
    if (currentA === currentB) return currentA.data;
    currentA = currentA.next;
    currentB = currentB.next;
  }
  return null;
}
