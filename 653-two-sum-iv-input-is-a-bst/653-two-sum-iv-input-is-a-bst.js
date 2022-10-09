/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function inorderTraverse(node, nodes) {
  if (!node) return
  inorderTraverse(node.left, nodes)
  nodes.push(node.val)
  inorderTraverse(node.right, nodes)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
function findTarget(root, k) {
  let nodes = []
  inorderTraverse(root, nodes)
  
  let l = 0
  let r = nodes.length - 1
  
  while (l < r) {
    const sum = nodes[l] + nodes[r]
    if (sum > k) {
      r--
    } else if (sum < k) {
      l++
    } else {
      return true
    }
  }
  
  return false
};