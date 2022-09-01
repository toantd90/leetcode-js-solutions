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
 * @return {number}
 */
function goodNodes(node, val = node.val) {
  if (!node) return 0
  
  if (node.val >= val) {
    return 1 + goodNodes(node.left, node.val) + goodNodes(node.right, node.val)
  } else {
    return goodNodes(node.left, val) + goodNodes(node.right, val)
  }
};