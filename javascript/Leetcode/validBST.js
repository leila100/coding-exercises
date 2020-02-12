/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
​
// performs the in-order traversal 
function in_order_traversal(root, arr) {
	if (root.left !== null) in_order_traversal(root.left, arr)
	arr.push(root.data)
	if (root.right !== null) in_order_traversal(root.right, arr)
}

// checks if the given array is in sorted ascending order
function is_sorted(arr) {
	for (let i=1; i<arr.length; i++) {
        if (arr[i] <= arr[i-1]) return false
    }
    return true
}

var isValidBST = function(root) {
    if (root === null) return true;
    /*
    perform an in-order walk of the tree, adding each node to an array. 
    Once we have an array of all the tree's values, we can check to see if the array is sorted or not. 
    If it isn't, then the tree wasn't a valid binary search tree since its node elements didn't come 
    back in sorted order. Otherwise, it was a valid binary search tree. 
    */
   tree_values = []
   // does the in-order traversal, populating the tree_values array 
   in_order_traversal(root, tree_values)
   // now check if the array is sorted 
   return is_sorted(tree_values)
};