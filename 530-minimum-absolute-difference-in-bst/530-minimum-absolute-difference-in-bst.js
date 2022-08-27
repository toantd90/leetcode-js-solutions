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
 * @return {number}
 */
function getMinimumDifference(root) {
  let nodes = []
  inorderTraverse(root, nodes)
  
  let minDifference = 1e5 + 1
  
  for (let i = 1; i < nodes.length; i++) {
    minDifference = Math.min(minDifference, nodes[i] - nodes[i - 1])
  }
  
  return minDifference
};