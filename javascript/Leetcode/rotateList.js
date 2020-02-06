/*
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL

Example 2:
Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
*/

var listLength = function(head) {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
};

var rotateRight = function(head, k) {
  // get length of list
  const length = listLength(head);
  if (length <= 1) return head;
  if (k % length === 0) return head;
  k = k % length;
  console.log(k);
  let current = head;
  for (let i = 0; i < length - k - 1; i++) {
    current = current.next;
  }
  const newTail = current;
  while (current.next !== null) current = current.next;
  current.next = head;
  head = newTail.next;
  newTail.next = null;
  return head;
};
