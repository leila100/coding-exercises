/*
Invert a binary tree.

Example:
input: [4,2,7,1,3,6,9]

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

output: [4,7,2,9,6,3,1]

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // Traverse the tree, reverse the two children nodes (if exist) every time
  const stack = [root];
  const visited = new Set();
  while (stack.length !== 0) {
    const currentNode = stack.pop();
    if (currentNode && !visited.has(currentNode)) {
      visited.add(currentNode);
      stack.push(currentNode.left);
      stack.push(currentNode.right);
      const temp = currentNode.left;
      currentNode.left = currentNode.right;
      currentNode.right = temp;
    }
  }
  return root;
};

// Other solution - recursion
/*
var invertTree = function(root) {
    if(root == null) return null;
    
    let right = root.right;
    let left = root.left;
    
    invertTree(left);
    invertTree(right);
    
    root.right = left;
    root.left = right;

    return root;
};*/
