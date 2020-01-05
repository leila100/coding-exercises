/*
A binary tree is a tree which is characterized by one of the following properties:

It can be empty (null).
It contains a root node only.
It contains a root node with a left subtree, a right subtree, or both. These subtrees are also binary trees.
In-order traversal is performed as

Traverse the left subtree.
Visit root.
Traverse the right subtree.
For this in-order traversal, start from the left child of the root node and keep exploring the left subtree until you reach a leaf. 
When you reach a leaf, back up to its parent, check for a right child and visit it if there is one. 
If there is not a child, you've explored its left and right subtrees fully. 
If there is a right child, traverse its left subtree then its right in the same manner. 
Keep doing this until you have traversed the entire tree. 
You will only store the values of a node as you visit when one of the following is true:

it is the first node visited, the first time visited
it is a leaf, should only be visited once
all of its subtrees have been explored, should only be visited once while this is true
it is the root of the tree, the first time visited
Swapping: Swapping subtrees of a node means that if initially node has left subtree L and right subtree R, 
then after swapping, the left subtree will be R and the right subtree, L.

For example, in the following tree, we swap children of node 1.

                                Depth
    1               1            [1]
   / \             / \
  2   3     ->    3   2          [2]
   \   \           \   \
    4   5           5   4        [3]
In-order traversal of left tree is 2 4 1 3 5 and of right tree is 3 5 1 2 4.

Swap operation:

We define depth of a node as follows:

The root node is at depth 1.
If the depth of the parent node is d, then the depth of current node will be d+1.
Given a tree and an integer, k, in one operation, we need to swap the subtrees of all the nodes at each depth h,
where h ∈ [k, 2k, 3k,...]. In other words, if h is a multiple of k, swap the left and right subtrees of that level.

You are given a tree of n nodes where nodes are indexed from [1..n] and it is rooted at 1. You have to perform t 
swap operations on it, and after each swap operation print the in-order traversal of the current state of the tree.

Function Description

Complete the swapNodes function in the editor below. 
It should return a two-dimensional array where each element is an array of integers representing the 
node indices of an in-order traversal after a swap operation.

swapNodes has the following parameter(s):
- indexes: an array of integers representing index values of each , beginning with , the first element, as the root.
- queries: an array of integers, each representing a  value.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  addLeft(node) {
    this.left = node;
  }
  addRight(node) {
    this.right = node;
  }
}

function buildTree(indexes) {
  var head = new Node(1);
  var i = 0;
  var stack = [head];
  while (i < indexes.length) {
    var node = stack.pop();
    if (node === null || node.val === -1) continue;
    let left = null;
    let right = null;
    if (indexes[i][0] === -1) left = null;
    else left = new Node(indexes[i][0]);
    if (indexes[i][1] === -1) right = null;
    else right = new Node(indexes[i][1]);
    node.addLeft(left);
    node.addRight(right);
    stack.unshift(left);
    stack.unshift(right);
    i += 1;
  }
  return head;
}

function printTree(node, visited, answer) {
  if (node.left !== null) printTree(node.left, visited, answer);
  if (node.left === null || visited.has(node.left)) {
    answer.push(node.val);
    visited.add(node);
  }
  if (node.right !== null) printTree(node.right, visited, answer);
}

function swap(tree, k) {
  var stack = [tree];
  var level = [tree];
  var depth = 1;
  while (level.length > 0) {
    level = [];
    while (stack.length > 0) {
      var currentNode = stack.pop();
      if (currentNode.left !== null) level.push(currentNode.left);
      if (currentNode.right !== null) level.push(currentNode.right);
      if (depth % k === 0) {
        [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left];
      }
    }
    depth++;
    stack = [...level];
  }
}

function swapNodes(indexes, queries) {
  var tree = buildTree(indexes);
  let answer = [];
  let returnArr = [];
  for (let k = 0; k < queries.length; k++) {
    swap(tree, queries[k]);
    answer = [];
    printTree(tree, new Set(), answer);
    returnArr.push([...answer]);
  }
  return returnArr;
}

// console.log(getDepth(6));
var indexes = [
  [2, 3],
  [-1, -1],
  [-1, -1]
];
// var indexes = [1, 2, 3, -1, 4, -1, 5, -1, -1, -1, -1];
// var indexes = [2, 3, 4, -1, 5, -1, 6, -1, 7, 8, -1, 9, -1, -1, 10, 11, -1, -1, -1, -1, -1, -1];
var queries = [1, 1];
// setDepth(tree);
// console.log(inOrderTraversal(indexes, [], 0));
console.log(swapNodes(indexes, queries));
