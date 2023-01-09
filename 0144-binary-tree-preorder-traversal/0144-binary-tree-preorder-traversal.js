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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let values = [];

  function preorder(node) {
    if (!node) return;
    values.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }

  preorder(root);
  return values;
};
