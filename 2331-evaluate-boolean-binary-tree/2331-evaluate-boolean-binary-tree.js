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
 * @return {boolean}
 */
const evaluateTree = root => {
  if (!root) return false
  if (root.val == 0) {
    return false
  } else if (root.val == 1) {
    return true
  } else if (root.val == 2) {
    return evaluateTree(root.left) || evaluateTree(root.right)
  } else {
    return evaluateTree(root.left) && evaluateTree(root.right)
  }
};