/*
A linked list is said to contain a cycle if any node is visited more than once while traversing the list.

Complete the function provided for you in your editor. 
It has one parameter: a pointer to a Node object named head that points to the head of a linked list. 
Your function must return a boolean denoting whether or not there is a cycle in the list. 
If there is a cycle, return true; otherwise, return false.

Note: If the list is empty, head will be null.
*/

function hasCycle(head) {
  if (!head) return false;
  const visited = new Set();
  const current_node = head;
  while (current_node) {
    if (visited.has(current_node)) return true;
    visited.add(current_node);
    current_node = current_node.next;
  }
  return false;
}
