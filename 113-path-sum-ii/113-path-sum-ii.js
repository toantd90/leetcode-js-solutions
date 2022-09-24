/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function dfs(node, path, paths, targetSum) {
  if (targetSum == node.val && !node.left && !node.right) {
    paths.push([...path, node.val])
    return 
  }
  
  path.push(node.val)
  targetSum -= node.val
  
  if (node.left) {
    dfs(node.left, path, paths, targetSum)
  }
  
  if (node.right) {
    dfs(node.right, path, paths, targetSum)
  }
  
  path.pop()
  targetSum += node.val
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
function pathSum(root, targetSum) {
  if (!root) return []
  let paths = []
  let path = []
  dfs(root, path, paths, targetSum)
  
  return paths
};