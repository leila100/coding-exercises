/*
Given a binary tree, return all duplicate subtrees. 
For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with same node values.

Example 1:

        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
The following are two duplicate subtrees:

      2
     /
    4
and

    4
Therefore, you need to return above trees' root in the form of a list.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  addLeft(val) {
    const newNode = new TreeNode(val);
    this.left = newNode;
  }
  addRight(val) {
    const newNode = new TreeNode(val);
    this.right = newNode;
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

function getTree(root) {
  const response = [];
  function addNode(node, response) {
    response.push(node.val);
    if (node.left !== null) addNode(node.left, response);
    else response.push("*");
    if (node.right !== null) addNode(node.right, response);
    else response.push("*");
  }
  addNode(root, response);
  return response;
}

var findDuplicateSubtrees = function(root) {
  const trees = new Set();
  const solution = [];
  const chosen = new Set();
  function checkEachNode(node, solution) {
    if (node === null) return;
    const tree = getTree(node);
    const path = tree.join("");
    if (trees.has(path)) {
      if (!chosen.has(path)) {
        console.log("path: ", path);
        solution.push(node);
        chosen.add(path);
      }
    } else trees.add(path);
    checkEachNode(node.left, solution);
    checkEachNode(node.right, solution);
  }
  checkEachNode(root, solution);
  return solution;
};

const tree = new TreeNode(1);
const l = new TreeNode(2);
const r = new TreeNode(3);
tree.left = l;
tree.right = r;
const l2 = new TreeNode(4);
const r2 = new TreeNode(4);
const l3 = new TreeNode(2);
const l4 = new TreeNode(4);

l.left = l2;
r.right = r2;
r.left = l3;
l3.left = l4;
// console.log(getTree(l3));
console.log(findDuplicateSubtrees(tree));
