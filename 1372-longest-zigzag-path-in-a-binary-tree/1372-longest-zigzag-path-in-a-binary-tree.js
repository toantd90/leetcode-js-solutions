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
function longestZigZag(root) {
  let longest = 0;

  function dfs(node, pathLength, isGoLeft) {
    if (!node) {
      return;
    }
    longest = Math.max(longest, pathLength);

    if (isGoLeft) {
      dfs(node.left, pathLength + 1, false);
      dfs(node.right, 1, true);
    } else {
      dfs(node.left, 1, false);
      dfs(node.right, pathLength + 1, true);
    }
  }

  dfs(root, 0, true);
  dfs(root, 0, false);

  return longest;
}
