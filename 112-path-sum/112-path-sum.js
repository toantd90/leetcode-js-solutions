/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function dfs(node, targetSum) {
  if (!node.left && !node.right) {
    return targetSum == node.val
  }
  
  if (node.left && dfs(node.left, targetSum - node.val)) {
    return true
  }
  
  if (node.right && dfs(node.right, targetSum - node.val)) {
    return true
  }
  
  return false
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
  if (!root) return false
  return dfs(root, targetSum)
};