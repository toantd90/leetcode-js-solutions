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
 * @return {string[]}
 */
function binaryTreePaths(root) {
  let ans = []
  function dfs(node, path) {
    if (!node.left && !node.right) {
      ans.push(path)
    }
    
    if (node.left) {
      dfs(node.left, path + '->' + node.left.val)
    }
    
    if (node.right) {
      dfs(node.right, path + '->' + node.right.val)
    }
  }

  dfs(root, `${root.val}`)
  
  return ans
};

