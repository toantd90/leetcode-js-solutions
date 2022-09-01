/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


function dfs(parent, child, length, longest) {
  if (!child) return length
  
  if (child.val - parent.val !== 1) {
    longest = Math.max(longest, length, dfs(child, child.right, 1, longest), dfs(child, child.left, 1, longest))
  } else {
    longest = Math.max(longest, dfs(child, child.right, length + 1, longest), dfs(child, child.left, length + 1, longest))
  }
  
  return longest
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function longestConsecutive(root) {
  if (!root) return 0
  
  return Math.max(dfs(root, root.left, 1, 1), dfs(root, root.right, 1, 1))
};